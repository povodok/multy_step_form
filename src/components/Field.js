import React from 'react';

const Field = (props) => {
  const { labelText, type, name, value, onChange, placeholder, error } = props
  return(
    <div className="form-group">
      <label>{labelText}</label>
      <input
        type={type}
        className={error ? "form-control invalid" : "form-control"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  )
}

export default Field
