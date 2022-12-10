import React, { useState } from "react";
import MockData from "../MOCK_DATA (1).json";
export default function Table() {
  const [data, setdata] = useState(MockData);
  const [order, setorder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };
  return (
    <div className="container">
      <table className="table table-border">
        <thead>
          <tr>
            <th onClick={() => sorting("first_name")}>first_name</th>
            <th onClick={() => sorting("last_name")}>last_name</th>
            <th onClick={() => sorting("email")}>email</th>
            <th onClick={() => sorting("gender")}>gender</th>
            <th onClick={() => sorting("ip_address")}>ip_address</th>
            <th onClick={() => sorting("airport_code")}>airport_code</th>
            <th onClick={() => sorting("time")}>time</th>
            <th onClick={() => sorting("status")}>status</th>
            <th onClick={() => sorting("mobile")}>mobile</th>
            <th onClick={() => sorting("area")}>area</th>
            <th onClick={() => sorting("show")}>show</th>
            <th onClick={() => sorting("edit")}>edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.first_name}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.gender}</td>
              <td>{d.ip_address}</td>
              <td>{d.airport_code}</td>
              <td>{d.time}</td>
              <td
                style={{
                  backgroundColor: d.status ? "green" : "red",
                }}
              >
                {d.status === true ? "true" : "false"}
              </td>
              <td>{d.mobile}</td>
              <td>{d.area}</td>
              <td>{d.show === true ? "true" : "false"}</td>
              <td>{d.edit === true ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
