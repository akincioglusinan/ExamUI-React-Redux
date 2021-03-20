import React from 'react'
import { Link } from 'react-router-dom'
import Slugify from '../tools/Slugify'

const ExamListItems = ({id, title}) => {
    return (
        <>
        <Link to={`/exam/${id}/${Slugify(title)}`}>{title}</Link>
</>
    )
}

export default ExamListItems
