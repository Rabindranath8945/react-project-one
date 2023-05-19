import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        const { id, name, category, image, price, description } = curElem;

        return (
          <>
            <div
              className="card-container"
              style={{ width: "33.3%", background: "red", padding: "20px" }}
              key={id}
            >
              <div className="card">
                <div className="card-body">
                  <div className="card-number">
                    <p>{id}</p>
                  </div>
                  <div className="card-title">
                    <h2 className="title">{name}</h2>
                    <h5 className="sub-title">{category}</h5>
                  </div>
                  <div className="card-price">
                    <p className="card-price-tag">{price}</p>
                  </div>
                  <div className="card-description">{description}</div>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="Menu" className="card-image" />
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
