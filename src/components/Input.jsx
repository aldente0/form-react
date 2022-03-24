const Input = (props) => {
    const {
        input,
        inputName,
        inputType,
        inputPlaceholder
    } = props;

    return <div className="form-group">
        {(input.isDirty && input.error) && <div className='error'>{input.error}</div>}
        <input
        className='input'
        type={inputType}
        name={inputName}
        value={input.value}
        placeholder={inputPlaceholder}
        onChange={input.handleChange}
        onBlur={input.handleBlur}
        />
    </div>
}

export {Input};