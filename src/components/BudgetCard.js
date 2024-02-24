import React from 'react';
import { currencyFormatter } from '../utils';
import {Card, ProgressBar, Button, Stack} from "react-bootstrap";

export default function BudgetCard ({name, amount, max, gray}){
    
    const classNames = []
    if(amount > max){
        classNames.push("bg-danger", "bg-opacity-10");
    } 
    else if(gray){
        classNames.push("bg-light");
    }
    function getProgressBarVariant (amount, max){
        const ration = amount / max
        if(ration < .5) return "primary"
        if(ration < .75) return "warning"
        return "danger"
    }

    return (
    <Card className={classNames.join(" ")}>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>
                    {name}
                </div>
                <div className='d-flex align-items-baseline'>{currencyFormatter.format(amount)}<span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format(max)}</span> </div>
            </Card.Title>
            <ProgressBar now={amount} min={0} max={max} className='rounded-pill' variant={getProgressBarVariant(amount, max)}></ProgressBar>
            <Stack direction="horizontal" gap="2" className="mt-4">
                <Button variant="outline-primary" className="ms-auto">Add Expensess</Button>
                <Button variant="outline-secondary">View Expensess</Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}
