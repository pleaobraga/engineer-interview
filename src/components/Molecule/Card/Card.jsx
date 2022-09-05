import { memo } from "react"

import { Button } from '../../Atom/Button'

import './Card.scss'

function Card({ name, id, onMoveBackwards, onMoveFoward, isBackButtonDisabled, isFowardButtonDisabled }) {
    return <li className="card">
        <Button
            className={'card__button--back'}
            isDisabled={isBackButtonDisabled}
            handleClick={() => onMoveBackwards(id)}
            aria-label={`Move backwards Task ${name}`}
        >
            <span>&#8592;</span>
        </Button>
        <p className="card__text">{name}</p>
        <Button
            className={'card__button--foward'}
            isDisabled={isFowardButtonDisabled}
            handleClick={() => onMoveFoward(id)}
            aria-label={`Move foward Task ${name}`}
        >
            <span>&#8594;</span>
        </Button>
    </li>
}

export default memo(Card)