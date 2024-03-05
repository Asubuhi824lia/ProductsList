export function getIdsParamCreator(page, limit) {
  return {
    offset: page * limit,
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
