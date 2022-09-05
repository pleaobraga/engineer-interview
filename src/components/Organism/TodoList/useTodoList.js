import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export function useTodoList(columnNames) {
    const [columns, setColumns] = useState(() => {
        return columnNames.reduce((acc, columnName) => {
            acc[columnName] = createColumn(columnName)
            return acc
        }, {});
    })

    function createColumn(columnName) {
        return { state: columnName, tasks: {}, name: columnName }
    }

    function createTask({ taskName, id }) {
        return { name: taskName, id, state: columnNames[0] }
    }

    function addNewTask(taskName) {

        const id = uuidv4()

        const newTask = createTask({ taskName, id })

        setColumns((state) => {
            const updatedState = { ...state }

            updatedState[columnNames[0]].tasks[id] = newTask

            return { ...updatedState }
        })
    }

    function moveTaskFoward(id) {
        const index = columnNames.findIndex(name => columns[name].tasks.hasOwnProperty(id) === true)

        if (index >= 0 && index + 1 < columnNames.length) {

            const updatedState = { ...columns }

            const currentColumn = columnNames[index]
            const nextColumn = columnNames[index + 1]

            const task = updatedState[currentColumn].tasks[id]

            delete updatedState[currentColumn].tasks[id]

            task.state = nextColumn
            updatedState[nextColumn].tasks[id] = task

            setColumns({ ...updatedState })
        }

    }

    function moveTaskBackward(id) {
        const index = columnNames.findIndex(name => columns[name].tasks.hasOwnProperty(id) === true)

        if (index > 0 && index - 1 >= 0) {
            
            const updatedState = { ...columns }

            const currentColumn = columnNames[index]
            const previousColumn = columnNames[index - 1]

            const task = updatedState[currentColumn].tasks[id]

            delete updatedState[currentColumn].tasks[id]

            task.state = previousColumn
            updatedState[previousColumn].tasks[id] = task

            setColumns({ ...updatedState })
        }

    }

    return {
        columns,
        addNewTask,
        moveTaskFoward,
        moveTaskBackward,
    }
}