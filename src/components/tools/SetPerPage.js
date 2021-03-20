import React from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
const SetPerPage = (props) => {
    const handlePerPage=(e)=>{
        e.preventDefault();
        props.onClickPer(Number(e.target.text))
    }
    return (
        <div className="text-right mb-1">
        <Dropdown as={ButtonGroup}>
            <Button variant="danger" size="sm" disabled>{props.perPage}</Button>
            <Dropdown.Toggle size="sm" split variant="secondary" id="dropdown-basic"></Dropdown.Toggle>
            <Dropdown.Menu variant="secondary" size="sm" id="bg-nested-dropdown">
                <Dropdown.Item onClick={handlePerPage}>5</Dropdown.Item>
                <Dropdown.Item onClick={handlePerPage}>10</Dropdown.Item>
                <Dropdown.Item onClick={handlePerPage}>20</Dropdown.Item>
                <Dropdown.Item onClick={handlePerPage}>50</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown></div>
    )
}

export default SetPerPage
