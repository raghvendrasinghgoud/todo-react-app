import AddTodo from "../../components/AddTodo";
import { ADD_TODO, CLEARUPTODO, DELETE_TODO, UPDATE_TODO, UPTODO } from "../actions/action-types";

const initialState=[];
const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:  
                return [...state,action.payload];
        case DELETE_TODO:
                const newState=state.filter((todo)=>todo.id!==action.payload)
                return newState;
        case UPDATE_TODO:
                const updateState=state.map((todo)=>{
                    if(todo.id===action.payload.todoId){
                        todo.title=action.payload.todo.title;
                        todo.description=action.payload.todo.description;
                        return todo;
                    }else return todo;
                });
                return updateState;
            default: return state;
    }

}

const initData={id:'',title:'',description:''};
export const upDataReducer=(upTodo=initData,action)=>{
    switch(action.type){
        case UPTODO:
                if(action.payload!==undefined)
                upTodo=action.payload;
                return upTodo;
        case CLEARUPTODO:
                upTodo=action.payload;
                return upTodo;
        default: return upTodo;
    }
}
export default todoReducer;