import React from 'react'
import Field from './Field'

const Basic = (props) => {
  const {
    firstName,
    lastName,
    password,
    confirmPassword,
    gender,
    onChange,
    errors
  } = props

  return(
    <div>
      <Field
        labelText='First Name'
        type='text'
        name='firstName'
        value={firstName}
        placeholder='Enter First Name'
        onChange={onChange}
        error={errors.firstName}
      />

      <Field
        labelText='Last Name'
        type='text'
        name='lastName'
        value={lastName}
        placeholder='Enter Last Name'
        onChange={onChange}
        error={errors.lastName}
      />

      <Field
        labelText='Password'
        type='password'
        name='password'
        value={password}
        placeholder='Enter Password'
        onChange={onChange}
        error={errors.password}
      />

      <Field
        labelText='Confirm Password'
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        placeholder='Enter Confirm Password'
        onChange={onChange}
        error={errors.confirmPassword}
      />

      <fieldset className="form-group">
        <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={onChange}
            />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </div>
  )
}

export default Basic
