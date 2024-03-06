import { apiUrl, commonOptions } from "./commonOptions";

const actions = {
  FILTER: "filter",
  IDS: "get_ids",
  ITEMS: "get_items",
  FIELDS: "get_fields",
};

export async function getIds(params) {
  return await _fetch(params, actions.IDS);
}
export async function getItems(params) {
  return await _fetch(params, actions.ITEMS);
}
export async function getFields(params) {
  return await _fetch(params, actions.FIELDS);
}
export async function getFiltered(params) {
  return await _fetch(params, actions.FILTER);
}

async function _fetch(params, action) {
  let response = undefined;

  do {
    response = await fetch(apiUrl, {
      ...commonOptions,
      body: JSON.stringify({
        action,
        params,
      }),
    })
      .then((res) => res.json())
      .catch((err) =>
        err.status
          ? console.error(`Error ${err.status}!`)
          : console.error(err.message)
      );
  } while (!response);

  return response;
}
