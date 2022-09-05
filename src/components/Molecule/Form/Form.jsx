import { useState } from "react"
import classnames from 'classnames';

import { Button } from '../../Atom/Button'
import { TextField } from '../TextField'

import './Form.scss'

export function Form({ onSubmit }) {

    const [taskName, setTaskName] = useState('')
    const [hasError, setHasError] = useState(false)

    const handleChangeInput = (event) => {
        setTaskName(event.target.value)
        setHasError(false)

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (taskName.length > 0) {
            onSubmit(taskName)
            setTaskName('')
        } else {
            setHasError(true)
        }

    }


    return <form className="form">
        <TextField
            placeholder="Add Task"
            value={taskName}
            handleChangeInput={handleChangeInput}
            isRequired={true}
            hasError={hasError}
        />
        <Button
            className="form__button"
            type="submit"
            onClick={handleSubmit}
            aria-label="Add Task Button"
        >
            &#10011;
        </Button>
    </form>
}