import { ActionTypes } from "../contants/actions-types"

const initialState = {
    products:[
    {
        id:1,
        title:"nike",
        category:"shoes"
    },
],
};




export const productReducer = (state, {type, payload}) => {
      switch (type) {
          case ActionTypes.SET_PRODUCTS:
              return state;

          default:
             return state;
      }
};