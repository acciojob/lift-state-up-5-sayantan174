import React from 'react'

const Form = (props)=>{

    return(
        <form onSubmit={props.func}>
            <label htmlFor="name">Username:</label>
            <input type="text" name="name" id="name" /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" /><br />
            <button type="submit">Login</button>
        </form>
    )
}
export default Form;