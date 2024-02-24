import React from 'react';
import { currencyFormatter } from '../utils';
import {Card, ProgressBar} from "react-bootstrap";

const BudgetCard = ({name, amount, max}) => {
  return (
    <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>
                    {name}
                </div>
                <div className='d-flex align-items-baseline'>{currencyFormatter.format(amount)}<span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format(max)}</span> </div>
            </Card.Title>
            <ProgressBar className='rounded-pill' min={0} max={max} now={amount} variant={getProgressBarVariant(amount,max)}>

            </ProgressBar>
        </Card.Body>
    </Card>
  )
}

export default BudgetCard

function getProgressBarVariant(amount, max){
    const ration = amount / max
    if(ration < .5) return "primary"
    if(ration < .75) return "warning"
    return "danger"
}