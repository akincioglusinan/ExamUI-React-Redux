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
    CLEAR_EXAM_MESSAGE
  
  } from "../actions/types";
  
  const examState = {
    isLoading: false,
    articles: [],
    exams: [],
    exam:{},
    questions:[],
    message: ''
  }
  
  const examReducer = (state = examState, action) => {
    switch (action.type) {
      case GET_ARTICLES_START:
        return {
          ...state,
          isLoading: true,
          message: ''
        }
      case GET_ARTICLES_SUCCESS:
        return {
          ...state,
          articles: action.payload.articles,
          isLoading: false
        }
      case GET_ARTICLES_ERROR: return {
        ...state,
        message: action.payload,
        isLoading: false
      }
      case GET_EXAMS_START:
        return {
          ...state,
          isLoading: true,
          message: ''
        }
      case GET_EXAMS_SUCCESS:
        
        return {
          ...state,
          exams: action.payload.exams,
          isLoading: false
        }
      case GET_EXAMS_ERROR: return {
        ...state,
        message: action.payload,
        isLoading: false
      }
      case GET_EXAM_START:
        return {
          ...state,
          isLoading: true,
          message: ''
        }
      case GET_EXAM_SUCCESS:
        return {
          ...state,
          exam: action.payload.exam,
          questions:action.payload.questions,
          isLoading: false
        }
      case GET_EXAM_ERROR: return {
        ...state,
        message: action.payload,
        isLoading: false
      }
     
      case ADD_EXAM:
        return {
          ...state,
          message: action.payload.message.data,
          exams: [...state.exams, action.payload.exam]
        }
  
      case ADD_EXAM_ERROR:
        return {
          ...state
        }
  
      case REMOVE_EXAM:
        return {
          ...state,
          message: action.payload.message.data,
          exams: state.exams.filter(({ id }) => {
            return id !== action.payload.eId
          })
        }
      case REMOVE_EXAM_ERROR:
        return { ...state, message: action.message }
      
        case CLEAR_EXAM_MESSAGE:
        return { ...state, message:''}
  
      default:
        return state;
    }
  }
  
  export default examReducer