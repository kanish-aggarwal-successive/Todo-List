import React from 'react'
import './SubmitForm.css'

const SubmitForm = (props) => {
    return (
        <div className="SubmitForm">
            <form onSubmit={props.submitHandler}>
                <input className="InputField1" type="text" id="todo" name="todo" placeholder="Enter Todo" />
                <input className="InputField2" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SubmitForm;
