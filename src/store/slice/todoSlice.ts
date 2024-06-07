import {TodoType} from "../../types/types.ts";

const initialState:TodoType[] = []

function nextTodoId(todos:TodoType[]) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    name: action.payload,
                    isCompleted: false,
                },
            ]
        }
        case 'todos/todoToggled': {
            return state.map((todo) => {
                if (todo.name !== action.payload) {
                    return todo
                }

                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            })
        }
        case 'todos/todoDeleted': {
            return state.filter((todo) => todo.name !== action.payload)
        }
        default:
            return state
    }
}
