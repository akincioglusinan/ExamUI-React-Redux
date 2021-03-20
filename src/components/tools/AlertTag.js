import React from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { clearExamMessage, clearMessage } from '../../actions/message';

const AlertTag = (props) => {
const dispatch=useDispatch();

const showAlert=()=>{
        setTimeout(() => {
            dispatch(clearMessage());
            dispatch(clearExamMessage());
        }, 8000)
    }
    return (
        <>
            {props.error && <Alert variant="danger" show={showAlert()}><p className="text-center">{props.error}</p></Alert>}
            {props.message && <Alert variant="success" show={showAlert()}><p className="text-center">{props.message}</p></Alert>}
        </>
    )
}

export default AlertTag
