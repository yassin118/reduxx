import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'

export const AddTask = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleInput = e => {
        setValue(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                <Input
                type="text"
                value={value}
                onChange={handleInput}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
                />
                </FormControl>
                <Button
                colorScheme="yellow"
                type="submit"
                disabled={!value}
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                >Add todo</Button>
            </Flex>
        </form>
    )
}