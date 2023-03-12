import React from 'react'
import moment from 'moment';
import { useState } from 'react';


const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const age = moment().diff(moment(dob), 'years');

    if (name.trim() === '' || email.trim() === '' || dob.trim() === '' || phone.trim() === '') {
      alert('All fields are required');
      return;
    }

    if (age < 18) {
      alert('You must be at least 18 years old to use this service');
      return;
    }
    const data = { name, email, phone, dob };
    fetch('https://assingment.onrender.com/user-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Form submitted');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
      console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <label>
        Date of birth:
        <input type="date" value={dob} onChange={(event) => setDob(event.target.value)} max={moment().format('YYYY-MM-DD')} />
      </label>
      <label>
        Age :
        <input type="number" value={moment().diff(moment(dob), 'years')} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

