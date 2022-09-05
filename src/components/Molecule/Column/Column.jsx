
import { ObjectToArray } from '../../../utils/general'

import { Card } from '../Card'

import './Column.scss'

export function Column({ name, tasks, onMoveFoward, onMoveBackwards, isFirstPosition, isLastPosition }) {
    return <div className='column'>
        <h3 className='column__title' >{name}</h3>

        <ul className='column__task-list' >
            {(ObjectToArray(tasks)).map(({ id, name }) =>
                <Card
                    key={id}
                    id={id}
                    name={name}
                    onMoveBackwards={onMoveBackwards}
                    onMoveFoward={onMoveFoward}
                    isBackButtonDisabled={isFirstPosition}
                    isFowardButtonDisabled={isLastPosition}
                />
            )}
        </ul>
    </div>
}