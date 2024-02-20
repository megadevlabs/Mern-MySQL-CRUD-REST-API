import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/read/' + id)
      .then(res => {
        console.log(res);
        setStudent(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="bg-white rounded p-3">
        <h2>Read Student Info</h2>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-success mx-2">
            View
          </Link>
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
            {student.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.ID}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                    <Link
                      to={`/edit/${data.ID}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Edit
                    </Link>
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

export default Read;
