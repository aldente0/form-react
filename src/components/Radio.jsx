const Radio = (props) => {
    const {
        input,
        inputType,
        inputName
    } = props;

    return <div className="form-group">
    Ваш пол: 
    <input type={inputType} className='radio'  value='М' name={inputName} onChange={input.handleChange}/>М
    <input type={inputType} className='radio'  value='Ж' name={inputName} onChange={input.handleChange}/>Ж
</div>
}

export {Radio}