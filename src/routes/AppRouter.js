import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Exam from '../components/exam/Exam'
import Exams from '../components/exam/Exams'
import MyExams from '../components/exam/MyExams'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header></Header>
            <Switch>
                <Route  path="/" component={Home} exact />
                <Route path="/exam/:id/:title" component={Exam} exact/>
                <Route path="/exams" component={Exams} />
                <Route path="/myexams" component={MyExams} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer></Footer>
        </div>
        </BrowserRouter>
    )
}

export default AppRouter
