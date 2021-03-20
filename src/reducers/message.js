import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {
  message:''
};

const Message=(state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      console.log(payload,"error")
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: '' };

    default:
      return state;
  }
}
export default Message