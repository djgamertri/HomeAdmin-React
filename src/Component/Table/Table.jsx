import React from "react";
import "./Table.css";

function Table(props) {
  const { headers, data } = props;

  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Residentes</h2>
          <a href="#" className="btn card open-modal btn" data-open="modal1">
            Añadir
          </a>
        </div>
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody id="tableBody">
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {item.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
