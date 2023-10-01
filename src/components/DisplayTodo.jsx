import { Card, Container, ListGroup } from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import { connect } from 'react-redux';
import { deleteTodo } from '../Redux/actions/todo';
import Button from 'react-bootstrap/Button';

const DisplayTodo = ({todos,deleteTodo}) => {
    
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
                                <Button type='button' onClick={(event)=>deleteTodo(todo.id)} variant="danger">Delete</Button>
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
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
});

export default connect(mapStateToPros,mapDispatchToProps)(DisplayTodo);
