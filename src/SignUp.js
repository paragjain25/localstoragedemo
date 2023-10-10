import React, { useState,useEffect } from 'react';
import './SignUp.css'

function SignUp() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      // Save the form data to localStorage
  localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Save form data to local storage before making the API request
          localStorage.setItem('formData', JSON.stringify(formData));
    
          // Perform form submission here, e.g., send formData to the server
          console.log('Form data submitted:', formData);
          
          // Clear the saved form data in local storage upon successful sign-up
          //localStorage.removeItem('formData');

        //   setTimeout(() => {
        //     // Clear the saved form data from local storage upon successful sign-up
        //     localStorage.removeItem('formData');
        //     console.log('Form data cleared from local storage');
        //   }, 5000); // Simulating a 2-second delay
    
          // After successful sign-up, you can redirect the user to another page or display a success message
        } catch (error) {
          console.error('Error submitting form:', error);
          // Handle and display error messages to the user
        }
      };

      // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []); // Empty dependency array to run only once when the component mounts

  
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
  export default SignUp;
  
