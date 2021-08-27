export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const ITEM_PRICE_UPDATE = 'ITEM_PRICE_UPDATE';
export const ITEM_QUANTITY_UPDATE = 'ITEM_QUANTITY_UPDATE';

export const addNewItem = (name, price,quantity) => ({
  type: ITEM_ADDED,
  payload: { name, price, quantity }
});

export const removeItem = (uuid) => {
  return {
    type: ITEM_REMOVED,
    payload: {
      uuid
    }
  };
};

export const updatePrice = (uuid, price) => {
  return {
    type: ITEM_PRICE_UPDATE,
    payload: {
      uuid,
      price
    }
  };
};
export const updateQuantity = (uuid, quantity) => {
  return {
    type: ITEM_QUANTITY_UPDATE,
    payload: {
      uuid,
      quantity
    }
  };
};
