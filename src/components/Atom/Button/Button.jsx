import classnames from 'classnames';

import './Button.scss'

export function Button({ isDisabled, children, className, handleClick, ...otherProps }) {
    return <button 
        className={classnames(`button ${className}`)}
        disabled={isDisabled} 
        onClick={handleClick} 
        {...otherProps} 
    >
        {children}
    </button >
}