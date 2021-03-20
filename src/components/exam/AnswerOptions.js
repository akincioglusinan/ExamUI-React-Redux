import React, { useState } from 'react'
import { Col, Container, InputGroup, Row } from 'react-bootstrap';

const AnswerOptions = (props) => {
    const [checked, setCheckBox] = useState("");
    return (
        <Container key={props.index}>
            <Row className="my-1">
                <Col xs={12} sm={12} md={6} lg={6} className="mb-1">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <input type="checkbox" style={{ "display": props.showCB }} className="radio"
                                    value={"A"}
                                    checked={checked === "A"}
                                    onChange={e => setCheckBox(e.target.value)} ></input>
                                <span>A)</span>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <span type="text" style={{ "height": "100%" }} className={(props.submit && (checked === "A" && (props.question.answer === checked ? "form-control bg-success text-white" : " form-control bg-danger text-white"))) || "form-control"} >{props.question.a}</span>
                    </InputGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <input type="checkbox" style={{ "display": props.showCB }} className="radio"
                                    value={"B"}
                                    checked={checked === "B"}
                                    onChange={e => setCheckBox(e.target.value)} ></input>
                                <span>B)</span>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <span type="text" style={{ "height": "100%" }} className={(props.submit && (checked === "B" && (props.question.answer === checked ? "form-control bg-success text-white" : " form-control bg-danger text-white"))) || "form-control"} >{props.question.b}</span>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="my-1">
                <Col xs={12} sm={12} md={6} lg={6} className="mb-1" >
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <input type="checkbox" style={{ "display": props.showCB }} className="radio"
                                    value={"C"}
                                    checked={checked === "C"}
                                    onChange={e => setCheckBox(e.target.value)} ></input>
                                <span>C)</span>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <span type="text" style={{ "height": "100%" }} className={(props.submit && (checked === "C" && (props.question.answer === checked ? "form-control bg-success text-white" : " form-control bg-danger text-white"))) || "form-control"} >{props.question.c}</span>
                    </InputGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <input type="checkbox" style={{ "display": props.showCB }} className="radio"
                                    value={"D"}
                                    checked={checked === "D"}
                                    onChange={e => setCheckBox(e.target.value)} ></input>
                                <span>D)</span>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <span type="text" style={{ "height": "100%" }} className={(props.submit && (checked === "D" && (props.question.answer === checked ? "form-control bg-success text-white" : " form-control bg-danger text-white"))) || "form-control"} >{props.question.d}</span>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default AnswerOptions
