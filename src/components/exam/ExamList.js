import React, { useEffect, useState } from 'react'
import { Table, Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getExams, removeExam } from '../../actions/exam';
import SpinnerUI from '../tools/SpinnerUI';
import '../../assets/css/OverrideBootstrap.css'
import { clearMessage } from '../../actions/message';
import ExamListItems from './ExamListItems';
import AlertTag from '../tools/AlertTag';
import Pagination from '../tools/Pagination';
import SetPerPage from '../tools/SetPerPage';

const ExamList = (props) => {

    const error = useSelector(state => state.message);
    const user = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [pagination, setPage] = useState({
        currentPage: 1,
        perPage: 5
    });

    useEffect(() => {
        dispatch(getExams());
        dispatch(clearMessage());
    }, [user.isLoggedIn, dispatch])

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeExam(parseInt(e.target.id)));
    }

    //Pagination part
    const handleClickPage = (id) => {
        setPage({ ...pagination, currentPage: id });
    }
    const handlePerPage = (per) => {
        setPage({ ...pagination, perPage: per })
    }
    const indexOfLast = pagination.currentPage * pagination.perPage;
    const indexOfFirst = indexOfLast - pagination.perPage;
    const currentList = props.data.exams.slice(indexOfFirst, indexOfLast);

    return (
        <>
            {props.data.isLoading ?
                <div className="main-wrapper bg-secondary py-5">
                    <SpinnerUI />
                </div>
                :
                <div className="main-wrapper bg-secondary">
                    <Container>
                        <Row>
                            <Col>
                                <Jumbotron className="my-5">
                                    <h1 className="text-center">{props.data.title}</h1>
                                    <b><AlertTag error={error.message} message={props.data.message} /></b>
                                    <SetPerPage perPage={pagination.perPage} onClickPer={(per)=>{handlePerPage(per)}}/>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Date</th>
                                                <th className="text-center">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentList.map((exam, index) => {
                                                return <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td><ExamListItems key={exam.id} {...exam} /> </td>
                                                    <td>{exam.dateTime}</td>
                                                    <td className="text-center"> {user.isLoggedIn && user.user.userId === exam.userId ?
                                                        <Button variant="danger" size="sm" id={exam.id} onClick={handleRemove}>X</Button> :
                                                        <Button variant="secondary" size="sm" title="The exams can be deleted if it was posted by yourself!" disabled>X</Button>}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </Table>
                                    <Pagination pagination={pagination} listLength={props.data.exams.length} onClickPage={(id) => { handleClickPage(id) }} />
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </>
    )
}

export default ExamList
