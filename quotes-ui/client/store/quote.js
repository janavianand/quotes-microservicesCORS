import Axios from "axios";

//contants
const FLAG = 'FLAG'

//action creator
const getQuoteFlag=(quote)=>({type:FLAG,quote})

//Thunks
export const quoteAndFlagThunk = ()=>async dispatch => {
  try {
    const {data} = await Axios.get('http://localhost:5001/api/quote')
    dispatch(getQuoteFlag(data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  flag:false,
  quote:{}
}

//Reducer

export default function(state=initialState,action){
  switch(action.type){
    case FLAG:
      return {quote:action.quote,flag:true}
    default:
      return state
  }
}
