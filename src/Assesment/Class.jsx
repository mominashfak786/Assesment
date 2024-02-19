import React, { useState } from "react";

const Class = ({ MainData, setMainData }) => {
  const [editIndex, seteditIndex] = useState(null);
  const [post, setpost] = useState({
    id: "",
    schoolid: "",
    studentids: "",
    assignment: "",
    status: "",
  });
  const handledelete = (index) => {
    let ans = MainData.filter((items, i) => {
      return i !== index;
    });
    setMainData(ans);
  };

  const handleEdit = (index) => {
    seteditIndex(index);
    setpost(MainData[index]);
  };

  const handleSave = (index) => {
    let original = [...MainData];
    original[index] = { ...post };
    setMainData(original);
    seteditIndex(null);
  };

  const handleCancel = () => {
    seteditIndex(null);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setpost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {MainData.map((items, index) => (
        <div className="card w-25 border-5">
          {editIndex === null ? (
            <>
              <div className="d-flex justify-content-end">
                <i
                  class="bi bi-pencil-square"
                  onClick={() => handleEdit(index)}
                  style={{ fontSize: "35px" }}
                ></i>
                <i
                  class="bi bi-trash3-fill"
                  onClick={() => handledelete(index)}
                  style={{ fontSize: "35px" }}
                ></i>
              </div>
            </>
          ) : (
            <div>
              <div className="d-flex justify-content-end">
                <i
                  class="bi bi-floppy-fill"
                  onClick={() => handleSave(index)}
                  style={{ fontSize: "35px" }}
                ></i>
                <i
                  class="bi bi-x-lg"
                  onClick={() => handleCancel(index)}
                  style={{ fontSize: "35px" }}
                ></i>
              </div>
            </div>
          )}

          {editIndex === null ? (
            <>
              <ul key={index}>
                <li>{items.id}</li>
                <li>{items.schoolid}</li>
                <li>{items.studentids}</li>
                <li>{items.assignment}</li>
                <li>{items.status}</li>
              </ul>
            </>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type="text"
                  name="id"
                  id=""
                  value={post.id}
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
                  value={post.schoolid}
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
                  value={post.studentids}
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
                  value={post.assignment}
                  id=""
                  placeholder="Enter assignment"
                  onChange={handlechange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  value={post.status}
                  name="status"
                  className="form-control me-2"
                  id=""
                  placeholder="Enter Id"
                  onChange={handlechange}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Class;
