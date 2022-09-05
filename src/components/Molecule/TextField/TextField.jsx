import classnames from 'classnames';

import './TextField.scss'


export function TextField({ value, handleChangeInput, hasError, placeholder, isRequired }) {
    return <div className='input-container' >
        <input
            className={classnames('input', { 'input--error': hasError })}
            tabIndex="0"
            aria-label={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={handleChangeInput}
            required={isRequired}
        />
        {hasError && <span className='error-message'>This fileds is required</span>}
    </div>
}