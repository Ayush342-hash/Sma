import React from 'react';

import ReactDOM from 'react-dom';
import './App.css';
import ProfilePic from './components/profilepic';
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

  
const Details = () =>  {
  return (
    
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Details</h2>
              <p className="text-white-50 mb-5">"Let's get you started !!"</p>
              
              
           
             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem '}} ><ProfilePic /> </div>
             
              {/* Username Input */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='text' size="lg" />
              
              {/* Firstname Input */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Firstname' id='formControlLg' type='text' size="lg" />
              
              {/* Lastname Input */}
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Lastname' id='formControlLg' type='text' size="lg" />
              
              {/* Email Input */}
              <MDBBtn href="/register" wrapperClass='mb-4 mx-5 w-100' style={{marginBottom: '1rem'}}  size='lg'>
                Back
              </MDBBtn>

              <MDBBtn wrapperClass='mb-4 mx-5 w-100 .p-3' style={{marginBottom: '1rem'}} size='lg'>
                Register
              </MDBBtn>
              
             
               
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
ReactDOM.render(<Details />, document.getElementById('root'));
export default Details;
