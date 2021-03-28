import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_MESSAGE,
    SET_MESSAGE_LIST,
  } from "./types";
  
  import AuthService from "../services/auth.service";
  
  export const register = (user) => (dispatch) => {
    return AuthService.register(user).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { user: response}
        });
  
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({
            type: CLEAR_MESSAGE,
          }); 
        dispatch({
          type: REGISTER_FAIL,
        });
        if(error.response.data.errors===undefined){
          dispatch({
            type: SET_MESSAGE,
            payload: error.response.data,
          });
        }else if (error.response.status === 400) {
          dispatch({
            type: SET_MESSAGE_LIST,
            payload: error.response.data.errors,
          });
        }
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
      (response) => {
        dispatch({
            type: CLEAR_MESSAGE,
          });  
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: response },
        });
       
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({
            type: CLEAR_MESSAGE,
          }); 
        dispatch({
          type: LOGIN_FAIL,
        });
        if(error.response.data.errors===undefined){
          dispatch({
            type: SET_MESSAGE,
            payload: error.response.data,
          });
        }else if (error.response.status === 400) {
          dispatch({
            type: SET_MESSAGE_LIST,
            payload: error.response.data.errors,
          });
        }
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };