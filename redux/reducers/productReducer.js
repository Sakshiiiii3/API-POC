import { Actiontypes } from "../constants/action-types"

const initialState = {
    products : []
}
export const productReducer = (state={initialState},{type , payload}) =>{
  switch(type){
     case Actiontypes.SET_PRODUCTS:
        return {...state, products : payload};
    default:
        return state;
  }
}