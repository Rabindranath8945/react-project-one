import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        return (
          <>
            <div
              className="card-container"
              style={{ width: "33.3%", background: "red", padding: "20px" }}
              key={curElem.id}
            >
              <div className="card">
                <div className="card-body">
                  <div className="card-number">
                    <p>{curElem.id}</p>
                  </div>
                  <div className="card-title">
                    <p className="title">{curElem.category}</p>
                  </div>
                  <div className="card-description">{curElem.description}</div>
                  <div className="card-read">Read</div>
                </div>
                <img
                  src={curElem.image}
                  alt="First Image"
                  className="card-image"
                />
                <div className="card-tag">Order Now</div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MenuCard;
