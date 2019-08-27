import React from 'react'
import Basic from './Basic'
import Contacts from './Contacts'
import Avatar from './Avatar'
import Finish from './Finish'
import capitalize from 'lodash/capitalize'

const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  gender: 'male',
  email: '',
  mobile: '',
  country: '0',
  city: '0',
  avatar: undefined,
  activeTab: 0,
  errors: {}
}

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState
    };
  }

  onChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })

    if(name === 'country') {
      this.setState({
        city: '0'
      })
    }
  }

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  onNextTab = () => {
    const {
      activeTab,
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      mobile,
      country,
      city,
      avatar
    } = this.state

    const errors = {}

    switch (activeTab) {
      case 0:
        if (firstName.length < 5) {
          errors.firstName = 'Must be 5 characters or more'
        }

        if (lastName.length < 5) {
          errors.lastName = 'Must be 5 characters or more'
        }

        if (password.length < 6) {
          errors.password = 'Must be 6 characters or more'
        }

        if (confirmPassword !== password) {
          errors.confirmPassword = 'Must be equal password'
        }

        if (Object.keys(errors).length > 0) {
          this.setState({
            errors: errors
          })
        } else {
          this.setState({
            activeTab: activeTab + 1,
            errors: {}
          })
        }
        break;

      case 1:
        if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email'
        }

        if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(mobile)) {
          errors.mobile = 'Invalid mobile'
        }

        if (country === '0') {
          errors.country = 'Required'
        }

        if (city === '0') {
          errors.city = 'Required'
        }

        if (Object.keys(errors).length > 0) {
          this.setState({
            errors: errors
          })
        } else {
          this.setState({
            activeTab: activeTab + 1,
            errors: {}
          })
        }
        break;

      case 2:
        if (!avatar) {
          errors.avatar = 'Required'
        }

        if (Object.keys(errors).length > 0) {
          this.setState({
            errors: errors
          })
        } else {
          this.setState({
            activeTab: activeTab + 1,
            errors: {}
          })
        }

        break;
      default:
        this.setState({
          ...initialState
        })
        break;
    }
  }

  onPrevTab = () => {
    this.setState((state) => ({
      activeTab: state.activeTab - 1
    }))
  }

  resetData = () => {
    this.setState({
      ...initialState
    })
  }

  render() {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      gender,
      email,
      mobile,
      country,
      city,
      avatar,
      activeTab,
      errors
    } = this.state
    const tabs = ['basic', 'contacts', 'avatar', 'finish']
    const allTabs = tabs.map((tab, i) => {
      return(
        <li className="nav-item" key={i}>
          <p
            className={i === activeTab ? 'nav-link active' : 'nav-link'}
            onClick={this.onChangeTabs}>
            {capitalize(tab)}
          </p>
        </li>
      )
    })

    return (
      <div className="form-container card">
        <form className="form card-body">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {allTabs}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {activeTab === 0 && (
              <Basic
                firstName={firstName}
                lastName={lastName}
                password={password}
                confirmPassword={confirmPassword}
                gender={gender}
                errors={errors}
                onChange={this.onChange}
              />
            )}
            {activeTab === 1 && (
              <Contacts
                email={email}
                mobile={mobile}
                country={country}
                city={city}
                errors={errors}
                onChange={this.onChange}
              />
            )}
            {activeTab === 2 && (
              <Avatar
                avatar={avatar}
                onChangeAvatar={this.onChangeAvatar}
                error={errors.avatar}
              />
            )}
            {activeTab === 3 && (
              <Finish
                firstName={firstName}
                lastName={lastName}
                email={email}
                mobile={mobile}
                country={country}
                city={city}
                avatar={avatar}
              />
            )}
          </div>

          {activeTab !== 3 && (
            <div>
              <button
                type="button"
                className="btn btn-grey"
                onClick={this.onPrevTab}
                disabled={activeTab === 0}
              >
                Prev
              </button>

              <button
                type="button"
                className="btn btn-dark"
                onClick={this.onNextTab}
              >
                Next
              </button>
            </div>
          )}
          {activeTab === 3 && (
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.resetData}
            >
              Reset
            </button>
          )}
        </form>
      </div>
    );
  }
}
