import React, { useCallback, useReducer } from "react"

import Input from './Input'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL,
    VALIDATOR_MAXLENGTH
  } from './validators'
import './Form.css'


const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  }

const Form = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
          firstName: {
            value: '',
            isValid: false
          },
          lastName: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          },
          eventDate: {
            value: '',
            isValid: false
          }
        },
        isValid: false
      });
    
      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        })
      }, [])
    
      const submitHandler = async e => {
        e.preventDefault()

        const url = 'http://localhost:5000/api/events'

        try {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: formState.inputs.firstName.value,
              lastName: formState.inputs.lastName.value,
              email: formState.inputs.email.value,
              eventDate: formState.inputs.eventDate.value
            })
          }
    
          const response = await fetch(url, requestOptions)
          .then(response => alert('You have submitted the form.'))
          .catch(error => alert('Form submit error', error))

          const responseData = await response.json()
          console.log(responseData)
        } catch (err) {
          console.log(err)
        }
      };
    

    return (
        <form onSubmit={submitHandler}>
            <Input
                type='text'
                placeholder='first name'
                id="firstName"
                element="input"
                validators={[VALIDATOR_MINLENGTH(2), VALIDATOR_MAXLENGTH(20)]}
                errorText="Please enter a valid name."
                onInput={inputHandler}
                 />
            <Input
                type='text'
                placeholder='last name'
                id="lastName"
                element="input"
                validators={[VALIDATOR_MINLENGTH(2), VALIDATOR_MAXLENGTH(20)]}
                errorText="Please enter a valid name."
                onInput={inputHandler}
                />
            <Input
                type='email'
                placeholder='e-mail'
                id="email"
                element="input"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid e-mail."
                onInput={inputHandler}
                />
            <Input
                type='date'
                placeholder='first name'
                id="firstName"
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter event's date."
                onInput={inputHandler}
                />
            <button type='submit' >Submit</button>
        </form>
    )
}

export default Form