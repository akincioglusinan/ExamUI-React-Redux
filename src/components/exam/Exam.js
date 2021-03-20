import React, { useEffect, useState } from 'react'
import { Col, Container, Jumbotron, Row, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getExam } from '../../actions/exam';
import SpinnerUI from '../tools/SpinnerUI'
import QuestionList from './QuestionList';

const Exam = (props) => {

    const data = useSelector(state => state.exam);
    const dispatch = useDispatch();
    const [submit, setSubmit]=useState(false);
    useEffect(() => {
        dispatch(getExam(props.match.params.id))
    }, [props.match.params.id, dispatch])
    return (
        <>
            {data.isLoading ?
                <div className="main-wrapper bg-secondary">
                    <SpinnerUI />
                </div>
                :
                <div className="main-wrapper bg-secondary">
                    <Container>
                        <Row>
                            <Col>
                                <Jumbotron className="my-5">
                                    {data.message && <Alert variant="success"><p className="text-center"><b>{data.message}</b></p></Alert>}
                                    <h2 className="text-center">{data.exam.title}</h2>
                                    <p>{data.exam.content}</p>
                                    <QuestionList qList={data.questions} showCB={"block"} submit={submit}/>
                                    <div className="row justify-content-md-center">
                                        <div className="col my-5 text-center" id="create">
                                            <input className="btn btn-outline-success btn-lg btn-block" type="submit" onClick={()=>{setSubmit(true)}} value="SUBMIT EXAM" />
                                        </div>
                                    </div>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </>
    )
}

export default Exam
