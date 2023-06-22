export const ADD = (item) => ({
  type: "ADD_CART",
  payload: item
});

export const DLT = (id) => ({
  type: "RMV_CART",
  payload: id
});

export const REMOVE = (item) => ({
  type: "RMV_ONE",
  payload: item
});
