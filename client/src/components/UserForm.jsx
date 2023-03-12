import React, { useState } from 'react';
import moment from 'moment';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let age = moment().diff(moment(dob), 'years');

    if (name.trim() === '' || email.trim() === '' || dob.trim() === '' || phone.trim() === '') {
      alert('All fields are required');
      return;
    }

    if (age < 18) {
      alert('You must be at least 18 years old to use this service');
      return;
    }

    const user = { name, email, phone, dob , age};
    setUsers([...users, user]);

    fetch('https://assingment.onrender.com/user-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
<<<<<<< HEAD
      .then((response) => {
        if (response.status === 200) {
          alert('Form submitted successfully');
        } else {
          alert('Something went wrong');
        }
=======
      .then((response) => response.json())
      .then((data) => {
        alert('Your Form is submitted');
>>>>>>> 77ca928731d3045c43579e0adfef248dcce2d1b0
      })
      .catch((error) => {
        alert('Something went wrong');
      });
  };

  return (
    <div>
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

        <button type="submit" onClick ={(e)=>alert("Form is submiited")}> 
        Submit
        </button>
      </form>
      <h2>List of Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Date of Birth: {user.dob}</p>
            <p>Age: {user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
