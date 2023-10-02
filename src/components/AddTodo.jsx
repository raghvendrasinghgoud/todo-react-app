import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { addTodo,updateTodo } from '../Redux/actions/todo';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { useEffect } from 'react';
const AddTodo = ({addTodo,oldTodo,updateTodo}) => {
    const[todo,setTodo]=useState(oldTodo);
    useEffect(() => {
        setTodo(oldTodo);
    }, [oldTodo]);
    const handleVal=(event)=>{
        event.preventDefault();
        if(todo.id==='')
        //call reduc store
        addTodo({...todo,id:v4()});
        else{
            updateTodo(todo,todo.id);
        }
        //clearing todo state
        setTodo({id:'',title:'',description:''});
    }

    return (
        <Container className='my-5'>
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
        </Container>
    );
}
const mapStateToProps=(state)=>{
    return {
        oldTodo:state.upDataReducer
    }
};

const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addTodo(todo))),
    updateTodo:(todo,id)=>(dispatch(updateTodo(todo,id)))
});
export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
