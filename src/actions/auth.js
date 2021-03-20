import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_MESSAGE,
  } from "./types";
  
  import AuthService from "../services/auth.service";
  
  export const register = (user) => (dispatch) => {
      debugger;
    return AuthService.register(user).then(
      (response) => {
          console.log(response);
          debugger;
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { user: response}
        });
  
        return Promise.resolve();
      })
      .catch(error => {
        dispatch({
            type: CLEAR_MESSAGE,
          }); 
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: error.response.data,
        });
  
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
      .catch(error => {
        dispatch({
            type: CLEAR_MESSAGE,
          }); 
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: error.response.data,
        });
  
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