// Register.tsx
import React, { useState } from 'react';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import fetchRegister from '../api/fetchRegister';

const roles = ["WRITER", "READER"];

function Register() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleRegister = async () => {
        await fetchRegister({
            username: email,
            password: password,
            roles: roles
        });

    }

    return (
        <MDBContainer >
            <MDBInput wrapperClass='mb-1' label='Email address' id='form1' type='email' value={email}
                onChange={handleEmailChange} />

            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password}
                onChange={handlePasswordChange} />

            <Button className="mb-4 my-custom-button-class" onClick={handleRegister}>Register</Button>

            <div className="text-center">
                <p>Already a member? <a href="/login">Login</a></p>
            </div>
        </MDBContainer>
    );
}

export default Register

