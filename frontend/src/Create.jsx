import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
  });
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/student', values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="bg-white rounded p-3">
        <h2>Add New Student</h2>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-success">
            Home +
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
