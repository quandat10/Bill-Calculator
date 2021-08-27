import produce from 'immer';
import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATE,
  ITEM_QUANTITY_UPDATE
} from './actions';
let id = 1;

export const initialItems = [
 
];

export const reducer = (state = initialItems, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case ITEM_ADDED:
        const item = { uuid: id++, ...action.payload };
        draftState.push(item);
        break;
      case ITEM_REMOVED:
        return state.filter((e) => e.uuid !== action.payload.uuid);
      case ITEM_PRICE_UPDATE:
        const itemPrice = draftState.find(
          (item) => item.uuid === action.payload.uuid
        );
        itemPrice.price = parseInt(action.payload.price, 10);
        break;
      case ITEM_QUANTITY_UPDATE:
        const itemQuantity = draftState.find(
          (item) => item.uuid === action.payload.uuid
        );
        itemQuantity.quantity = parseInt(action.payload.quantity, 10);
        break;
    }
  });

export default reducer;
