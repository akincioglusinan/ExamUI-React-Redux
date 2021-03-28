import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { getExams } from '../../actions/exam';
import { clearMessage } from '../../actions/message';
import ExamsBody from './ExamList'

const MyExams = () => {
    var data = useSelector(state => state.exam);
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExams());
        dispatch(clearMessage());
    }, [user.isLoggedIn, dispatch])
    
    if (user.isLoggedIn) {
        data.exams = data.exams.filter((x) => {
            return user.user.userId === x.userId
        });
        data = ({ ...data, title: "My Exams" })
    }

    
    return (
        <>
        {user.isLoggedIn ? <ExamsBody data={data} /> : <Redirect to='/login' />}
        </>
    )
}

export default MyExams
