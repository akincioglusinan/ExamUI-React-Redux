import { SET_MESSAGE, CLEAR_MESSAGE, SET_MESSAGE_LIST } from "../actions/types";

const initialState = {
  message:'',
  list:[]
};

const Message=(state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      console.log(payload,"error")
      return { message: payload };
    
      case SET_MESSAGE_LIST:
        console.log(payload,"error list")
        return { list: payload };

    case CLEAR_MESSAGE:
      return { message: '' };

    default:
      return state;
  }
}
export default Message