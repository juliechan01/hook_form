import React, { useState } from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserForm = (props) => {
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    let [cPw, setCpw] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { fName, lName, email, pw, cPw };
        console.log("Welcome", newUser);
        setFname("");
        setLname("");
        setEmail("");
        setPw("");
        setCpw("");
    };
    
    return(
        <>
            <div className='container'>
                <form onSubmit={ createUser } className='form'>
                    <div>
                        <label className='form-label'>First name: </label> 
                        <input type="text" value={fName} onChange={ (e) => setFname(e.target.value) } className='form-control col-5' />
                    </div>
                    <div>
                        <label className='form-label'>Last name: </label> 
                        <input type="text" value={lName} onChange={ (e) => setLname(e.target.value) } className='form-control'/>
                    </div>
                    <div>
                        <label className='form-label'>Email address: </label> 
                        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } className='form-control'/>
                    </div>
                    <div>
                        <label className='form-label'>Password: </label>
                        <input type="password" value={pw} onChange={ (e) => setPw(e.target.value) } className='form-control'/>
                    </div>
                    <div>
                        <label className='form-label'>Confirm password: </label>
                        <input type="password" value={cPw} onChange={ (e) => setCpw(e.target.value) } className='form-control'/>
                    </div>
                    <div className='button'>
                        <input type="submit" value="Create User" className='btn btn-outline-success'/>
                    </div>
                </form>

                <div>
                    <h3>Your form data:</h3>
                    <p>First Name: {fName}</p>
                    <p>Last Name: {lName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {pw}</p>
                    <p>Confirm password: {cPw}</p>
                </div>
            </div>
        </>
    );
};
    
export default UserForm;