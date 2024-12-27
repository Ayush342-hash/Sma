import React from 'react';
import './App.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon

} from 'mdb-react-ui-kit'; 


const Register = () =>  {
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-4 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">"Hello and welcome! Please add your details to get started !!"</p>

            
              
              {/* Email Input */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
              
              {/* Mobile Number Input */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Mobile Number' id='formControlLg' type='tel' size="lg" />
          

              {/* Password Input */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Retype Password' id='formControlLg' type='password' size="lg" />

               <MDBBtn href="/details" wrapperClass='mb-4 mx-5 w-100 .p-3'  size='lg'> Next </MDBBtn>
                               

              <div>
                <p className="mb-0 pt-3"> or Sign up with </p>
              </div>

              <div className='d-flex flex-row mt-0 mb-0'>
                <MDBBtn tag='a' color='transparent' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg" />
                </MDBBtn>

                <MDBBtn tag='a' color='transparent' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg" />
                </MDBBtn>

                <MDBBtn tag='a' color='transparent' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg" />
                </MDBBtn>
              </div>
               
              <div>
                <a href="/login" className="text-white-50 fw-bold">Sign In</a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
);
}

export default Register;
