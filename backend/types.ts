import zod from "zod"; 

export const createTodo = zod.object({
    title: zod.string().min(1, {message: "Title Can't be empty"}),
    description: zod.string().min(1, {message: "Description Can't be empty"})
})

export const completeTodo = zod.object({
    id: zod.string().min(1, {message: "Id can't be empty"})
})
