import React from 'react'
import Field from './Field'
import countries from '../data/countries'
import cities from '../data/cities'
import pickBy from 'lodash/pickBy'

const Contacts = (props) => {
  const { email, mobile, country, city, onChange, errors } = props

  const getOptionsCountries = countries.map((country) => (
    <option key={country.id} value={country.id}>
      {country.name}
    </option>
  ))

  const countryCities = pickBy(cities, (v) => (v.country === parseInt(country)))
  const getOptionsCities = Object.entries(countryCities).map(([k, v]) => (
    <option key={k} value={k}>
      {v.name}
    </option>
  ))

  return(
    <div>
      <Field
        labelText='Email'
        type='text'
        name='email'
        value={email}
        placeholder='Enter email'
        error={errors.email}
        onChange={onChange}
      />

      <Field
        labelText='Mobile'
        type='text'
        name='mobile'
        value={mobile}
        placeholder='Enter Mobile'
        error={errors.mobile}
        onChange={onChange}
      />

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          className={errors.country ? "form-control invalid" : "form-control"}
          id="country"
          name="country"
          value={country}
          onChange={onChange}
        >
          <option value="0" defaultValue>Select Country</option>
          {getOptionsCountries}
        </select>
        {errors.country && <p className="invalid-feedback">{errors.country}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          className={errors.country ? "form-control invalid" : "form-control"}
          id="city"
          name="city"
          value={city}
          onChange={onChange}
        >
          <option value="0" defaultValue>Select City</option>
          {getOptionsCities}
        </select>
        {errors.city && <p className="invalid-feedback">{errors.city}</p>}
      </div>
    </div>
  )
}

export default Contacts
