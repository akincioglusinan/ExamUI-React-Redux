import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles, addExam } from '../../actions/exam'
import { clearExamMessage, clearMessage, setMessage } from '../../actions/message'
import AlertTag from '../tools/AlertTag'
import SpinnerUI from '../tools/SpinnerUI'
import QuestionForm from './QuestionForm'
import QuestionList from './QuestionList'

const Articles = () => {
    const data = useSelector(state => state.exam);
    const user = useSelector(state => state.auth);
    const error = useSelector(state => state.message);
    const dispatch = useDispatch();

    const [qList, setQuestions] = useState([])
    const [exam, setExam] = useState({
        title: "",
        content: "",
        userid: null | 0
    })
    const [question, setQuestion] = useState({
        enumber: 0,
        qnumber:0,
        q: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: ''
    })
    useEffect(() => {
        dispatch(getArticles());
        dispatch(clearMessage());
    }, [user.isLoggedIn, dispatch])

    const submitExam = (e) => {
        e.preventDefault();
            setExam(exam.title = data.articles[e.target.id].title, exam.content = data.articles[e.target.id].content, exam.userid = (user.isLoggedIn ? user.user.userId: 0));
            const questions = qList.filter((x) => {
                return x.enumber === parseInt(e.target.id)
            });
            dispatch(clearExamMessage());
            questions.map((x,index)=>{
               return x.qnumber=index+1;
            })
            dispatch(addExam(exam, questions));
            setExam({
                title: "",
                content: "",
                userid: 0
            });
    }

    const addQuestion = (e) => {
        e.preventDefault();
        if (user.isLoggedIn) {
            if (question.q !== '' && question.a !== '' && question.b !== '' && question.c !== '' && question.d !== '' && question.answer !== '') {
                setQuestion(question.enumber = parseInt(e.target.id))
                setQuestions([...qList, question])
                setQuestion({
                    enumber: 0,
                    qnumber:0,
                    q: '',
                    a: '',
                    b: '',
                    c: '',
                    d: '',
                    answer: ''
                });
                
                
            } else {
                dispatch(setMessage("Please fill in blanks of the question form and choose the correct answer!"));
            }
        } else (
            dispatch(setMessage("You have to be logged in!"))
        )
    }

    const handleOnChange = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }

    const handleQuestion = (e) => {
        var id = "col" + e.target.id
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


    return (
        <div className="pt-5" >
            {data.isLoading ? <SpinnerUI /> :

                data.articles.map((x, indexArt) => {
                    return <div key={indexArt} >
                        <Row >
                            <Col className="card bg-light my-3 text-center">
                                <Button className="btn btn-light btn-block btn-sm" ><h4 id={indexArt} onClick={handleQuestion}>{x.title}</h4></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col id={"col" + indexArt} style={{ display: "none" }} >
                                <Form className="jumbotron" id={indexArt} onSubmit={submitExam}>
                                    <Form.Row><p>{x.content}</p></Form.Row>

                                    <QuestionList qList={qList} indexArt={indexArt} showCB={"none"}/>

                                    <QuestionForm data={data} indexArt={indexArt} question={question}
                                        handleOnChange={(e) => { handleOnChange(e) }} setQuestion={(e) => { setQuestion(e) }} />

                                    <Form.Row>
                                        <Col className="font-weight-bold text-center">
                                        <AlertTag error={error.message} message={data.message} />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Button variant="success" type="submit" size="sm" id={indexArt} onClick={addQuestion}> + Add The Question</Button>
                                        </Col>

                                        <Col className="text-right">
                                            <Button variant="success" type="submit" size="lg">Create Exam </Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                        </Row>

                    </div>
                })
            }

        </div>
    )
}

export default Articles
