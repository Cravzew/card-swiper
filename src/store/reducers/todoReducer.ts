// import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {RootState} from "../store";
//
// interface TodoReducer {
//     title: string
//     id: number
// }
//
// interface TodoReducerAction {
//     todos: TodoReducer[]
// }
//
// const initialState: TodoReducerAction = {
//     todos: []
// }
//
// export const TodoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         addTodo(state) {
//             state.todos.push({
//                 id: Math.round(Math.random() * 1000),
//                 title: Math.random().toString().substring(5, 36),
//             })
//         },
//         deleteTodo(state, action: PayloadAction<number>) {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//         }
//     }
// })
//
// export const {addTodo, deleteTodo} = TodoSlice.actions
//
// export const Todo = (state: RootState) => state.todo
//
// export default TodoSlice.reducer