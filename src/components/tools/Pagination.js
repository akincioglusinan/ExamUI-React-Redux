import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const Pagination = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        props.onClickPage(Number(e.target.id))
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.listLength / props.pagination.perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="text-center">
            <ButtonGroup className="mr-2" aria-label="First group">
                {pageNumbers.map((x) => {
                    return <div className="btn-group" key={x}><Button  variant={x === props.pagination.currentPage ? "danger" : "secondary"} id={x} onClick={handleClick}>{x}</Button>  {' '}</div>
                })}
            </ButtonGroup>
        </div>
    )
}

export default Pagination
