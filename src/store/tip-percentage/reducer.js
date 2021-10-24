import { TIP_PERCENTAGE_UPDATED } from './actions';

export const initialTipPercentage = 0;

export const reducer = (state = initialTipPercentage, action) => {
  if (action.type === TIP_PERCENTAGE_UPDATED) {
    return action.payload;
  }

  return state;
};

export default reducer;
