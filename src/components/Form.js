import React from "react";
import { useState } from "react";
import "./Form.css"

const Contact_US = function () {
  {/* -- setState -- */ }
  const [inputs, setInputs] = useState({})

  {/* -- inputs data -- */ }
  const handleChange = function (event) {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({
      ...values, [name]: value
    }))
  }

  {/* -- select data -- */ }
  const [myGender, setGender] = useState('female')
  const selectedGender = function (event) {
    setGender(event.target.value)
  }

  {/* -- textArea -- */ }
  const [textComments, setTextarea] = useState('')
  const submitComment = function (event) {
    setTextarea(event.target.value)
  }

  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [isActive, setIsActive] = useState(false);
  {/*-- submit form --*/ }
  const submitForm = function (event) {
    event.preventDefault();
    // alert(`The name ${inputs.username} \nAge: ${inputs.enteredAge}\nGender: ${myGender}\nComments: ${textComments}`)
    setIsActive(true);
  }

  React.useEffect(() => {
    if (inputs.username && inputs.enteredAge && myGender && textComments) {
      setIsNotEmpty(true);
    } else {
      setIsNotEmpty(false);
    }
  }, [inputs.username, inputs.enteredAge, myGender, textComments]);

  return (
    <div className="form-container">
      <form className="ui form" onSubmit={submitForm}>
        <fieldset>
          <legend className="title">User Information</legend>
          <label for='name'>Enter your name: </label>
          <input
            type="text"
            placeholder="type your name..."
            id="name"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />

          <label for='age'>Enter age: </label>
          <input
            type="number"
            id='age'
            name='enteredAge'
            value={inputs.enteredAge}
            onChange={handleChange}
          />

          {/* -- select gender -- */}
          <div style={{ marginTop: '1em' }}>
            <label>Select a gender:
              <select value={myGender} onChange={selectedGender}>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='other'>Other</option>
              </select>
            </label>
          </div>

          {/* -- textArea -- */}
          <div style={{ marginTop: '1em' }}>
            <textarea
              value={textComments}
              onChange={submitComment}
              placeholder="Type comments..."
            >
            </textarea>
          </div>

          {/*-- submit form --*/}
          <div style={{ marginTop: "1em" }}>
            <input type="submit" className="ui button" disabled={!isNotEmpty} />
          </div>
        </fieldset>
      </form>

      {isActive ? (
        <div>
          <ul>Thank you for participating {inputs.username}. The information entered was:</ul>
          <ul>Age: {inputs.enteredAge}</ul>
          <ul>Gender: {myGender}</ul>
          <ul>Comments: {textComments}</ul>

          <ul>Have a great day!</ul>
        </div>
      ) : (
        <div>
          <ul>Don't forgot to submit the form</ul>
        </div>
      )}
    </div>
  )
}

export default Contact_US