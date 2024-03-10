export function getIdsParamCreator({ offset, limit }) {
  return {
    offset,
    limit,
  };
}
export function getItemsParamCreator({ ids }) {
  return {
    ids,
  };
}
export function getFieldsParamCreator({ field, offset, limit }) {
  return {
    field,
    offset,
    limit,
  };
}
export function getFilteredParamCreator(field, value) {
  return {
    [field]: value,
  };
}
