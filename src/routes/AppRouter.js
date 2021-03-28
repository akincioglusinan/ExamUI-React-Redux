import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Exam from '../components/exam/Exam'
import Exams from '../components/exam/Exams'
import MyExams from '../components/exam/MyExams'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import NotFoundPage from '../components/NotFoundPage'
import Guide from '../components/Guide'
import About from '../components/About'

const AppRouter = () => {
    return (
        <Router>
        <div>
            <Header></Header>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/exam/:id/:title" component={Exam} exact/>
                <Route path="/exams" component={Exams} />
                <Route path="/guide" component={Guide} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/myexams" component={MyExams} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer></Footer>
        </div>
        </Router>
    )
}

export default AppRouter
