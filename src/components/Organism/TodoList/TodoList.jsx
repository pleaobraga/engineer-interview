import { useTodoList } from './useTodoList'

import { Form } from '../../Molecule/Form'
import { Column } from '../../Molecule/Column'

import './TodoList.scss'


const COLUMN_NAMES = [
    'todo',
    'in progress',
    'done'
]


export function TodoList() {
    const { columns, addNewTask, moveTaskBackward, moveTaskFoward } = useTodoList(COLUMN_NAMES)

    return <div className='todo-list'>
        <div className='todo-list__column-container' >
            {COLUMN_NAMES.map((columnName, index) => {
                const { state, name, tasks } = columns[columnName]
                return <Column
                    key={state}
                    tasks={tasks}
                    name={name}
                    onMoveBackwards={moveTaskBackward}
                    onMoveFoward={moveTaskFoward}
                    isFirstPosition={index === 0}
                    isLastPosition={index === COLUMN_NAMES.length - 1}
                />
            })}
        </div>
        <Form onSubmit={addNewTask} />
    </div>
}