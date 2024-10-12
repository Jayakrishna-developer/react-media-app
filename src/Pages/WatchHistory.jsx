import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { DeleteHistoryAPI, GetHistoryAPI } from "../../service/allAPI";

function WatchHistory() {
    
const[history,setHistory]=useState([])


useEffect(()=>{
  getHistory()
},[])

const getHistory= async()=>{
  const result= await GetHistoryAPI()
  console.log(result);
  if(result.status==200){
    setHistory(result.data)
  }
  else{
    console.log("api failed");
    console.log(result.message);
  }
}
const removewatchHistory = async (id) => {
  await DeleteHistoryAPI(id);
  getHistory();
};

  return (
    <div style={styles.body}>
      {/* Header Container */}
      <div
        className="container-fluid d-flex align-items-center justify-content-between"
        style={styles.headerContainer}
      >
        <div className="watchhistory">
          
          <h3 style={styles.headerText}>Watch History</h3>
        </div>
        <div className="backtohome">
          <Link to={"/home"} style={styles.backLink}>
            BacktoHome
          </Link>
        </div>
      </div>

      <div className="container-fluid">
        <div className="table-container d-flex align-items-center justify-content-center">
          <Table
            responsive="lg"
            striped
            bordered
            hover
            variant="dark"
            style={styles.table}
          >
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Caption</th>
                <th style={styles.th}>Url</th>
                <th style={styles.th}>Timestamp</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {history?.length > 0 ? (
                history.map((history,index) => (
                  <tr>
                    <td style={styles.td}>{index+1}</td>
                    <td style={styles.td}>{history.caption}</td>
                    <td style={styles.td}>
                      <a href={`${history.link}?autoplay=1`} target="_blank" style={styles.link}>
                        {history.link}
                      </a>
                    </td>
                    <td style={styles.td}>{history.timestamp}</td>
                    <td style={styles.td}>
                      <button onClick={()=>removewatchHistory(history?.id)} style={styles.actionButton}>Remove</button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>Nothing to display</p>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "#f5f5f5",
    color: "#2c3e50",
    minHeight: "100vh",
    padding: "2rem",
  },
  headerContainer: {
    padding: "1rem 2rem",
    borderRadius: "8px",
    width: "100%",
  },
  headerText: {
    color: "#2c3e50",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  backLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#2c3e50",
    borderRadius: "5px",
  },

  table: {
    width: "100%",
    textAlign: "center",
    margin: "20px 0",
  },
  thead: {
    backgroundColor: "#343a40",
    color: "#fff",
  },
  th: {
    padding: "10px 50px",
    borderBottom: "2px solid #dee2e6",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #dee2e6",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  actionButton: {
    padding: "5px 10px",
    backgroundColor: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default WatchHistory;
