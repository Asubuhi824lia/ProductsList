import { apiUrl, commonOptions } from "./constants";

const actions = {
  FILTER: "filter",
  IDS: "get_ids",
  ITEMS: "get_items",
  FIELDS: "get_fields",
};

export function getIdsParamCreator(offset, limit) {
  return {
    offset,
    limit,
  };
}
export function getItemsParamCreator(ids) {
  return {
    ids,
  };
}
export function getFieldsParamCreator(field, offset, limit) {
  return {
    field,
    offset,
    limit,
  };
}
export function getFilteredParamCreator(field) {
  return {
    field,
  };
}

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
  const response = await fetch(apiUrl, {
    ...commonOptions,
    body: JSON.stringify({
      action: action,
      params: params,
    }),
  }).then((res) => res.json());

  return response;
}
