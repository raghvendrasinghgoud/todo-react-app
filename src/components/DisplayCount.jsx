import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

const DisplayCount = ({todosLength}) => {
    return (
        <Card>
            <Card.Body>
                <h4>Number of todos: {todosLength}</h4>
            </Card.Body>
        </Card>
    );
}

const mapStateToProps=(state)=>{
    return {todosLength:state.todoReducers.length};
};

const mapDispatchToProps=(dispatch)=>({});
export default connect(mapStateToProps,mapDispatchToProps) (DisplayCount);
