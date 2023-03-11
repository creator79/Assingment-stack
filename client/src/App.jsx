import React, { useState } from 'react';

import css from './App.css';


function UserForm() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    const errors = [];
    if (name.trim() === '') {
      errors.push('Name is required');
    }
    if (dob === '') {
      errors.push('Date of Birth is required');
    } else {
      const age = getAge(dob);
      if (age < 18) {
        errors.push('Age must be at least 18');
      }
    }
    if (email.trim() === '') {
      errors.push('Email is required');
    }
    if (phone.trim() === '') {
      errors.push('Phone number is required');
    }
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    // Send form data to the server
    const formData = { name, dob, email, phone };
    const res = await fetch("http://localhost:5000/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  

    console.log(formData);
 
  };

  const getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div>
      <h1>User Form</h1>
      {errors.length > 0 &&
        <div className="errors">
          {errors.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={getAge(dob)} onChange={(e) => setAge(e.target.value)} required />

        <button type="submit">Submit</button>
        

        {/* create input for age */}
      </form>
    </div>
  );
}

export default UserForm;
