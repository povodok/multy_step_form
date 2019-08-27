import React from 'react'
import countries from '../data/countries'
import cities from '../data/cities'

const Finish = (props) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    country,
    city,
    avatar
  } = props

  const userCountry = countries.find((obj) => {
    return obj.id = country
  }).name

  const userCity = cities[city].name

  return(
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-4">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <div className="col-8 d-flex align-items-center">
          <h4>{`${firstName} ${lastName}`}</h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email:</strong>
            {email}
          </p>
          <p>
            <strong>Mobile:</strong>
            {mobile}
          </p>
          <p>
            <strong>Location:</strong>
            {`${userCountry}, ${userCity}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Finish
