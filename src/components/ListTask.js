import { Box } from '@chakra-ui/layout'
import { useSelector } from 'react-redux'
import React from 'react'
import { Task } from './Task'
import { getTodosByVisFilter } from '../redux/selector'

export const ListTask = () => {
    const { todos, VisFilter } = useSelector(state => state);
    const filterTodos = getTodosByVisFilter(todos, VisFilter);
    return (
        <Box my={3}>
            {filterTodos.length ? filterTodos.map(todo => (
                <Task key={`todo-${todo.id}`} todo={todo}/>
            )) : <Box textAlign="center" my="4">Todos</Box>}
        </Box>
    )
}