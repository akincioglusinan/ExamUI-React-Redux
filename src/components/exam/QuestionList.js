import React from 'react'
import AnswerOptions from './AnswerOptions';

const QuestionList = (props) => {
    return (
        <>
            {props.qList.map((question, index) => {
                return question.enumber === props.indexArt &&
                    <div key={index + 20}>
                        <div className="row justify-content-md-center">
                            <div className="col my-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Question </span>
                                    </div>
                                    <span style={{ "height": "100%" }} rows="5" type="text" className="form-control" disabled>{question.q}</span>
                                </div>
                            </div>
                        </div>
                        <AnswerOptions question={question} index={index} showCB={props.showCB} submit={props.submit} />
                    </div>
            })}
        </>
    )
}

export default QuestionList
