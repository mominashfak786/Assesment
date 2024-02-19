import React, { useState } from "react";
const CreateClass = ({MainData,setMainData}) => {
  const [classdata, setclassdata] = useState({
    id: "",
    schoolid: "",
    studentids: "",
    assignment: "",
    status: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setclassdata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
      setMainData((prev) => [...prev, classdata])
      console.log(MainData)
  };

  return (
    <div>
      <div className="card">
        <form className="container" onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              id=""
              className="form-control"
              placeholder="Enter Id"
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="school-id">School-id</label>
            <input
              type="text"
              name="schoolid"
              className="form-control"
              id=""
              placeholder="school-id"
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="student-ids">Student(Student Id)</label>
            <input
              type="text"
              name="studentids"
              className="form-control"
              id=""
              placeholder="Student(Student Id)"
              onChange={handlechange}
            />
          </div>
          <div className="assignment">
            <label htmlFor="assignment">assignment</label>
            <input
              type="text"
              name="assignment"
              className="form-control"
              id=""
              placeholder="Enter assignment"
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              name="status"
              className="form-control me-2"
              id=""
              placeholder="Enter Id"
              onChange={handlechange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default CreateClass;
