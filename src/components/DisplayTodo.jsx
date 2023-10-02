import { Card, Container, ListGroup } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import { deleteTodo,upTodo } from '../Redux/actions/todo';
import Button from 'react-bootstrap/Button';

const DisplayTodo = ({todos,deleteTodo,upTodo}) => {

    return (
       

        <Container className="my-5">
            <Card>
                <Card.Body>
                    <h3>All todos are here</h3>
                    <DisplayCount></DisplayCount>
                    <ListGroup>
                    {
                        todos.map((todo,index)=>(
                            <ListGroup.Item key={index}>
                                
                                <p>{todo.id}</p>
                                <h4>{todo.title}</h4>
                                <p>{todo.description}</p>
                                
                                
                                    <Button type='button' onClick={(event)=>upTodo(todo)} variant="success">Update</Button>
                                    <Button className='ms-2' type='button' onClick={(event)=>deleteTodo(todo.id)} variant="danger">Delete</Button>
                                
                    
                            </ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
}

const mapStateToPros=(state)=>{
    return {todos:state.todoReducers};
}
const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id))),
    upTodo:(todo)=>(dispatch(upTodo(todo)))
});

export default connect(mapStateToPros,mapDispatchToProps)(DisplayTodo);
