import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = id => {
    axios
      .delete('http://localhost:4000/delete/' + id)
      .then(res => {
        location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="bg-white rounded p-3">
        <h2>Student List</h2>
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Create +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.ID}</td>
                  <td>{student.Name}</td>
                  <td>{student.Email}</td>
                  <td>
                    <Link
                      to={`/read/${student.ID}`}
                      className="btn btn-sm btn-info"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/edit/${student.ID}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(student.ID)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete{' '}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
