import React from 'react'
import { useSelector } from 'react-redux';
import ExamList from './ExamList';

const Exams = () => {
    var data=useSelector(state=>state.exam);
    data=({...data, title:"Exams"})
    return (
        <>
            <ExamList data={data} />
        </>
    )
}

export default Exams
