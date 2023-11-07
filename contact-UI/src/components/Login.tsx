import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import getAuth from '../api/auth';

interface Props {
    className?: string;
    onAuthentication: (token: string) => void;
}

interface AuthResponse {
    jwtToken: string;
}

function Login(props: Props) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const data: AuthResponse = await getAuth(email, password)

        if (data?.jwtToken) {

            props.onAuthentication(data.jwtToken);
        }

        console.log(data, "result token luz ", email, password)
    }
    return (
        <MDBContainer className={`${props.className} p-3 my-5 d-flex flex-column w-50`}>

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email}
                onChange={handleEmailChange} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password}
                onChange={handlePasswordChange} />

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
            </div>

            <Button className="mb-4 my-custom-button-class" onClick={handleLogin}>Sign in</Button>


            <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                <p>or sign up with:</p>

                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                    </MDBBtn>

                </div>
            </div>

        </MDBContainer>
    );
}

export default styled(Login)`
  transition: none;
.my-custom-button-class {
  transition: none; /* Deshabilita cualquier transición o animación */
}
`;