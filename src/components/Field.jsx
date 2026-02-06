const Field = (props) => {
    const {
        className = '',
        id,
        label,
        type = 'text',
        value,
        onInput,
        ref,
    } = props
    
    return (
        <div className={`field ${className}`}>
          <label
            className="field__label"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className="field__input"
            id={id}
            placeholder=" "
            autoComplete="off"
            onInput={onInput}
            type={type}
            value={value}
            ref={ref}
          />
        </div>
    )
}

export default Field