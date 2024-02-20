import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:4000/read/' + id)
      .then(res => {
        console.log(res.data);
        // setStudent(res.data);
        setValues({
          ...values,
          name: res.data[0].Name,
          email: res.data[0].Email,
        });
      })
      .catch(err => console.log(err));
  }, []);

  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const handleUpdate = e => {
    e.preventDefault();
    axios
      .put('http://localhost:4000/update/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="bg-white rounded p-3">
        <h2>Update Student</h2>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-success">
            Home +
          </Link>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              required
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
