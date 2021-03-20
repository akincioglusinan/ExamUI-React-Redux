import React from 'react'
import { Col, Container, Form, FormControl, InputGroup} from 'react-bootstrap'

const QuestionForm = (props) => {
    const handleOnChange = (e) => {
        props.handleOnChange(e)
    }

    
    return (
        
        <Container key={"empty" + props.indexArt}>
        <Form.Row className="justify-content-md-center">
            <Col>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Question</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" placeholder="Enter question" aria-label="With textarea" value={props.question.q} name="q" onChange={handleOnChange} rows={5} />
                </InputGroup>
            </Col>
        </Form.Row>
        <Form.Row className="my-1">
            <Col xs={12} sm={12} md={6} lg={6} className="mb-1">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>A)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" name="a" onChange={handleOnChange} value={props.question.a} rows={2} />
                </InputGroup>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>B)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" name="b" onChange={handleOnChange} rows={2} value={props.question.b} />
                </InputGroup>
            </Col>
        </Form.Row>
        <Form.Row className="my-1">
            <Col xs={12} sm={12} md={6} lg={6} className="mb-1">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>C)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" name="c" onChange={handleOnChange} rows={2} value={props.question.c} />
                </InputGroup>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>D)</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" name="d" onChange={handleOnChange} rows={2} value={props.question.d} />
                </InputGroup>
            </Col>
        </Form.Row>
        <Form.Row className="justify-content-md-center">
            <Col sm={6} >
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Correct Answer</Form.Label>
                    <Form.Control as="select" name="answer" onChange={handleOnChange} value={props.question.answer}>
                        <option>Choose</option>
                        <option value="A">A)</option>
                        <option value="B">B)</option>
                        <option value="C">C)</option>
                        <option value="D">D)</option>
                    </Form.Control>
                </Form.Group>
            </Col>
        </Form.Row>
    </Container>

    )
}

export default QuestionForm
