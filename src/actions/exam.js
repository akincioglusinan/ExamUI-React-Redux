import {
  GET_ARTICLES_START,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_EXAMS_START,
  GET_EXAMS_SUCCESS,
  GET_EXAMS_ERROR,
  GET_EXAM_START,
  GET_EXAM_SUCCESS,
  GET_EXAM_ERROR,
  ADD_EXAM,
  ADD_EXAM_ERROR,
  REMOVE_EXAM,
  REMOVE_EXAM_ERROR,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from "./types";

import ExamService from "../services/exam.service";
import { setMessage } from "./message";
import { logout } from "./auth";

export const getArticles = () => (dispatch) => {
  dispatch({ type: GET_ARTICLES_START })
  return ExamService.getarticles().then(
    (response) => {
      dispatch({
        type: GET_ARTICLES_SUCCESS,
        payload: { articles: response.data }
      });

      return Promise.resolve();
    })
    .catch(error => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
      dispatch({
        type: GET_ARTICLES_ERROR,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error,
      });

      return Promise.reject();
    }
    );
};
export const getExams = () => (dispatch) => {
  dispatch({ type: GET_EXAMS_START })
  return ExamService.getexams().then(
    (response) => {
      dispatch({
        type: GET_EXAMS_SUCCESS,
        payload: { exams: response.data }
      });

      return Promise.resolve();
    })
    .catch(error => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
      dispatch({
        type: GET_EXAMS_ERROR,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error,
      });

      return Promise.reject();
    }
    );
};

export const getExam = (id) => (dispatch) => {
  dispatch({ type: GET_EXAM_START })
  return ExamService.getexam(id).then(
    (response) => {
      dispatch({
        type: GET_EXAM_SUCCESS,
        payload: { exam: response.data.exam, questions: response.data.questions }
      });

      return Promise.resolve();
    })
    .catch(error => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
      dispatch({
        type: GET_EXAM_ERROR,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: error,
      });

      return Promise.reject();
    }
    );
};

export const addExam = (exam, questions) => (dispatch) => {
  
  return ExamService.add(exam, questions).then(
    (response) => {
      dispatch({
        type: ADD_EXAM,
        payload: { message: response, exam }
      });
      dispatch({
        type: CLEAR_MESSAGE,
      });
      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
      if (error.response.status === 400) {
        dispatch({
          type: ADD_EXAM_ERROR,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: error.response.data,
        });
      }else if(error.response.status===401){
        dispatch(setMessage("You have to be logged in!"));
        dispatch(logout())};

      return Promise.reject();
    }
    );
};

export const removeExam = (id) => (dispatch) => {
  return ExamService.delete(id).then(
    (response) => {
      dispatch({
        type: REMOVE_EXAM,
        payload: { message: response, eId: id }
      });
      dispatch({
        type: CLEAR_MESSAGE,
      });
      return Promise.resolve();
    })
    .catch( (error) =>{

      dispatch({
        type: CLEAR_MESSAGE,
      });
      if (error.response.status === 400) {
        dispatch({
          type: REMOVE_EXAM_ERROR
        });
        dispatch({
          type: SET_MESSAGE,
          payload: error
        });
      }else if(error.response.status===401){
        dispatch(setMessage("You have to be logged in!"));
        dispatch(logout());
      }
      
      return Promise.reject();
    }
    );
};