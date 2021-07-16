import {Component} from 'react'
import './index.css'

class Registration extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    formSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstNameInput = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstNameError: true})
      return false
    }
    this.setState({firstNameError: false})
    return true
  }

  onBlurLastNameInput = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastNameError: true})
      return false
    }
    this.setState({lastNameError: false})
    return true
  }

  submitForm = event => {
    event.preventDefault()
    const isFirstNameValid = this.onBlurFirstNameInput()
    const isLastNameValid = this.onBlurLastNameInput()
    if (isFirstNameValid && isLastNameValid) {
      this.setState({formSubmitted: true})
    }
  }

  renderSuccessOnSubmit = () => {
    console.log('Done')

    return (
      <div className="submit-response">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p className="submit-msg">Submitted Successfully</p>
        <button
          type="submit"
          onClick={this.submitAnotherForm}
          className="submit-button"
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  submitAnotherForm = () => {
    this.setState({formSubmitted: false, firstName: '', lastName: ''})
  }

  renderFirstNameInput = () => {
    const {firstName, firstNameError} = this.state
    const errorInfo = firstNameError ? 'input-error-style' : ''

    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={this.onChangeFirstName}
          className={`input-field ${errorInfo}`}
          onBlur={this.onBlurFirstNameInput}
          placeholder="First name"
        />
        {firstNameError ? <p className="required-error-msg">Required</p> : ''}
      </>
    )
  }

  renderLastNameInput = () => {
    const {lastName, lastNameError} = this.state
    const errorInfo = lastNameError ? 'input-error-style' : ''

    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={this.onChangeLastName}
          className={`input-field ${errorInfo} `}
          onBlur={this.onBlurLastNameInput}
          placeholder="Last name"
        />
        {lastNameError ? <p className="required-error-msg">Required</p> : ''}
      </>
    )
  }

  renderFormField = () => (
    <form onSubmit={this.submitForm} className="form-container">
      <div className="input-container">{this.renderFirstNameInput()}</div>
      <div className="input-container">{this.renderLastNameInput()}</div>
      <button
        type="submit"
        onClick={this.onClickValidateInputs}
        className="submit-button"
      >
        Submit
      </button>
    </form>
  )

  render() {
    const {formSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration</h1>
        <div className="container">
          {formSubmitted
            ? this.renderSuccessOnSubmit()
            : this.renderFormField()}
        </div>
      </div>
    )
  }
}

export default Registration
