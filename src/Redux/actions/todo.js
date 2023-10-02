import { ADD_TODO, CLEARUPTODO, DELETE_TODO, UPDATE_TODO, UPTODO } from "./action-types";

export const addTodo=(todo)=>({
    type:ADD_TODO,
    payload:todo
});

export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:id
});

export const updateTodo=(todo,id)=>({
    type:UPDATE_TODO,
    payload:{todo:todo,todoId:id}
});

export const upTodo=(todo)=>({
    type:UPTODO,
    payload:todo
})

export const clearUpTodo=()=>({
    type:CLEARUPTODO,
    payload:{id:'',title:'',description:''}
});