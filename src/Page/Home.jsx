import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { toast } from "react-toastify";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ firstname: "", lastname: "", age: "", qualification: "", email: "" });
  const [editing, setEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({ _id: null, firstname: "", lastname: "", age: "", qualification: "", email: "" });

  // Base URL for your backend
  const baseURL = "http://localhost:3000"; 

  // Fetch employees from the server
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${baseURL}/employee`);
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  // Add employee to the server
  const addEmployee = async () => {
    if (newEmployee.firstname && newEmployee.lastname && newEmployee.age && newEmployee.qualification && newEmployee.email) {
      try {
        const response = await axios.post(`${baseURL}/addemp`, newEmployee);
        setEmployees([...employees, response.data]);
        setNewEmployee({ firstname: "", lastname: "", age: "", qualification: "", email: "" });
        toast.success('Employee Added Successfully')
      } catch (error) {
        console.error("Error adding employee:", error);
        toast.error('Something went wrong');
      }
    } else {
      toast.warn('Please fill in all required fields');
    }
  };

  // Delete employee from the server
  const deleteEmployee = async (_id) => {
    try {
      await axios.delete(`${baseURL}/deleteemp/${_id}`);
      setEmployees(employees.filter((employee) => employee._id !== _id));
      toast.success('Employee Deleted Successfully');
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error('Error deleting employee');
    }
  };

  // Edit employee
  const editEmployee = (employee) => {
    setEditing(true);
    setCurrentEmployee(employee);
  };

  // Update employee on the server
  const updateEmployee = async () => {
    try {
      const response = await axios.put(`${baseURL}/updateemp/${currentEmployee._id}`, currentEmployee);
      setEmployees(
        employees.map((employee) =>
          employee._id === currentEmployee._id ? response.data : employee
        )
      );
      setEditing(false);
      setCurrentEmployee({ _id: null, firstname: "", lastname: "", age: "", qualification: "", email: "" });
      toast.success("Employee Updated Successfully");
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="text-center">Employee Management System</h1>
      
      <div className="w-75 border shadow p-4 mt-4">
        <div className="employee-form text-center">
          {editing ? (
            <div>
              <h2>Edit Employee</h2>
              <input
                type="text"
                value={currentEmployee.firstname}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, firstname: e.target.value })}
                placeholder="First Name"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="text"
                value={currentEmployee.lastname}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, lastname: e.target.value })}
                placeholder="Last Name"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="number"
                value={currentEmployee.age}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, age: e.target.value })}
                placeholder="Age"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="text"
                value={currentEmployee.qualification}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, qualification: e.target.value })}
                placeholder="Qualification"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="email"
                value={currentEmployee.email}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, email: e.target.value })}
                placeholder="Email"
                className="form-control w-50 m-auto mb-3"
              />
              <button onClick={updateEmployee} className="btn btn-success">Update Employee</button>
            </div>
          ) : (
            <div>
              <h2>Add Employee</h2>
              <input
                type="text"
                value={newEmployee.firstname}
                onChange={(e) => setNewEmployee({ ...newEmployee, firstname: e.target.value })}
                placeholder="First Name"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="text"
                value={newEmployee.lastname}
                onChange={(e) => setNewEmployee({ ...newEmployee, lastname: e.target.value })}
                placeholder="Last Name"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="number"
                value={newEmployee.age}
                onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
                placeholder="Age"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="text"
                value={newEmployee.qualification}
                onChange={(e) => setNewEmployee({ ...newEmployee, qualification: e.target.value })}
                placeholder="Qualification"
                className="form-control w-50 m-auto mb-3"
              />
              <input
                type="email"
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                placeholder="Email"
                className="form-control w-50 m-auto mb-3"
              />
              <button onClick={addEmployee} className="btn btn-success">Add Employee</button>
            </div>
          )}
        </div>
      </div>

      <div className="employee-list bg-light w-75 mt-4 p-4 text-center border shadow">
        <h2>Employee List</h2>
        <ul className="list-unstyled">
          {employees.map((employee) => (
            <li key={employee._id} className="mb-3">
              {employee.firstname} {employee.lastname} - {employee.age} - {employee.qualification} - {employee.email}
              <div>
                <button onClick={() => editEmployee(employee)} className="btn btn-warning m-2">Edit</button>
                <button onClick={() => deleteEmployee(employee._id)} className="btn btn-danger m-2">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;