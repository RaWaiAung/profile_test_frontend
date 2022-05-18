import React, { useEffect, useState } from "react";
import Axios from "axios";

const Processlist = () => {
  const [process, setProcess] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerpage = 5;
  
  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/api/v1/task");
    setProcess(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete process
  const handleDelete = (id) => {
    console.log("deleteId",id);
    const response = Axios.delete(`http://localhost:5000/api/v1/task/${id}`);
    window.location = "/process"
  }

  // Edit process
  const handleEdit = (item) => {
    console.log(item);
  }
  // Pagination
  const lastPost = currentPage * postPerpage;
  const firstPost = lastPost - postPerpage;
  const currentPost = process.slice(firstPost, lastPost);
  const increase = (currentPage) => {
      if (currentPage < process.length / postPerpage) {
          setCurrentPage(currentPage + 1);
      }
  }
  const decrease = (currentPage) => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);

      }
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ProcessTitle</th>
            <th scope="col">SubName</th>
            <th scope="col">SubVersion</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPost?.map((item) => {
            const { _id, processTitle, subName, subVersion } = item;
            return (
              <tr key={_id}>
                <td>{processTitle}</td>
                <td>{subName}</td>
                <td>{subVersion}</td>
                <td>
                  <button className="btn btn-secondary" onClick={()=> handleEdit(item)}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-warning" onClick={()=> handleDelete(_id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="btn-section">
         <button onClick={() => decrease(currentPage)} className="btn btn-primary btn-right">Previous</button>
         {currentPage >= process.length / postPerpage ? null : <button onClick={() => increase(currentPage)} className="btn btn-primary">Next</button>}
      </div>
    </div>
  );
};

export default Processlist;
