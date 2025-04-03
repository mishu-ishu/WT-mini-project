import React from "react";

const Localities = () => {
  const localities = ["Baner", "Wakad", "Ravet", "Hadapsar", "Kharadi"];

  return (
    <div className="popular-localities">
      {localities.map((locality, index) => (
        <div key={index} className="locality">
          {locality}
        </div>
      ))}
    </div>
  );
};

export default Localities;
