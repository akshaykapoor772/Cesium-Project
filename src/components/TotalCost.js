import React from 'react';

function TotalCost({ totalCost }) {
  return (
    <div className="total-cost-container">
      <p>Total Cost: <span className="cost-value"></span> ${totalCost}</p>
    </div>
  );
}

export default TotalCost;
