import React,{useState} from 'react'
import Container from "react-bootstrap/Container"
import {Stack, Button} from "react-bootstrap";
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';

const App = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false) //showAddBudgetModal

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="4" className="my-4">
          <h1 className='me-auto'>Budget App</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expensess</Button>
        </Stack>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"1rem", alignItems:"flex-start"}}>
          <BudgetCard gray name="Entertainment" amount={200} max={1000}></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => 
        setShowAddBudgetModal(false)}/>
    </>
  )
}

export default App