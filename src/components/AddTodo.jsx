import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { addTodo } from '../Redux/actions/todo';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
const AddTodo = ({addTodo}) => {
    const[todo,setTodo]=useState({title:'',description:'',id:''});
    const handleVal=(event)=>{
        event.preventDefault();
        //call reduc store
        addTodo({...todo,id:v4()});

        //clearing todo state
        setTodo({title:'',description:''});
    }

    return (
        <Form onSubmit={handleVal}>
            <Form.Group>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control type="text" value={todo.title} onChange={(event)=>setTodo({...todo,title:event.target.value})} placeholder="Title" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Todo Description</Form.Label>
                <Form.Control type="text" value={todo.description} onChange={(event)=>setTodo({...todo,description:event.target.value})} placeholder="Description" />
            </Form.Group>
            <Container className='text-center my-3'>
            <Button type='submit' variant="primary">Submit</Button>
            </Container>
        </Form>
    );
}
const mapStateToProps=(state)=>({});

const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
});
export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
