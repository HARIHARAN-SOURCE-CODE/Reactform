import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    education: "",
    languages: "",
    experience: "",
  });


  const [users, setUsers] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

  
    for (let key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the ${key} field`);
        return;
      }
    }

    if (formData.username.length < 3) {
      alert("Username must be at least 3 characters long");
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be 10 digits only");
      return;
    }

    if (editIndex !== null) {
 
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
 
      setUsers([...users, formData]);
    }

  
    setFormData({
      username: "",
      fullName: "",
      email: "",
      phone: "",
      education: "",
      languages: "",
      experience: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };


  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Registration Form</h1>

   
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter full name"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter phone (10 digits)"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Education</label>
          <input
            name="education"
            value={formData.education}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Education background"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Languages</label>
          <input
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Preferred coding languages"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Experience</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? "Update" : "Register"}
          </button>
        </div>
      </form>

  
      <div className="mt-5">
        <h2 className="mb-3">Registered Users</h2>
        {users.length === 0 ? (
          <p>No users registered yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Username</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Education</th>
                  <th>Languages</th>
                  <th>Experience</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.education}</td>
                    <td>{user.languages}</td>
                    <td>{user.experience}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
