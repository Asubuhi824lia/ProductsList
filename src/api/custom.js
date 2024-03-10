import { getIds, getItems } from "./api";
import { getIdsParamCreator, getItemsParamCreator } from "./paramsCreators";

export const PageItems = 50;

export const loadGoods = ({ PageNum, setGoods, setStatuses }) => {
  setStatuses(true, null);

  getGoods({ PageNum })
    .then((items) => {
      setGoods(items);
      setStatuses(false, null);
    })
    .catch((err) => setStatuses(false, err.message));
};

export const getGoods = async ({ PageNum }) =>
  await getUniqueIds_unfiltered({ PageNum })
    .then((ids) => getItems(getItemsParamCreator({ ids })))
    .then(removeItemsDuplicates);

export const removeItemsDuplicates = (items) => {
  const uniqItems = [];
  const includesId = (id) => {
    return uniqItems.find((item) => item.id === id) ? true : false;
  };
  // добавить только товар с новым id
  items.result.forEach((item) => {
    if (!includesId(item.id)) uniqItems.push(item);
  });
  return uniqItems;
};

export async function getUniqueIds_unfiltered({
  PageNum,
  left = PageItems,
  offset = 0,
  uniques = [],
}) {
  return await getUniqueIds(
    {
      PageNum,
      left,
      offset,
      uniques,
    },
    async () =>
      // offset = pageNum * limit
      await getIds(
        getIdsParamCreator({
          offset: (offset + PageNum - 1) * left,
          limit: left,
        })
      )
  );
}

// Получить уникальные айди из fetch-запроса по переданному callback`у
async function getUniqueIds(
  { PageNum, left = PageItems, offset = 0, uniques = [] },
  fetchCallback
) {
  if (PageItems <= 0 || left <= 0 || offset < 0) return []; // проверка входных данных

  // подгрузка
  const response = await fetchCallback(offset + PageNum - 1, left);
  // проверка
  let ids = response.result;
  if (uniques.length > 0) ids = [...uniques, ...ids];
  ids = Array.from(new Set(ids));

  // достигли последней порции данных?
  if (response.result.length < left) return ids;

  // ids не хватает
  if (ids.length < PageItems) {
    // Вызываем рекурсию ради "накопления" уникальных ids до нужного кол-ва
    return await getUniqueIds_unfiltered({
      PageNum: PageNum,
      left: PageItems - ids.length,
      offset: offset + PageItems,
      uniques: ids,
    });
  } else if (ids.length === PageItems) return ids; // 50 ids найдено!
  else return ids.slice(0, PageItems - 1); // отсекаем лишние (подстраховка)
}

export default loadGoods;
