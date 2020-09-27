import React from 'react'

const Input = (props) => {

    const{name,error,label,onChange} =props;

    return (
        <div>
            <label>{label}</label>
            <input name={name} type="input" className={error ? "form-control is-invalid" : "form-control"} id="exampleInputEmail1" onChange={onChange} />
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    )
}

export default Input
