import React from "react";

const TopSeller = [
  {
    image: "/buger5.jpg",
    text: "Rancho Burger",
    taste: "Delicious Burger",
    price: 1400,
    order: "Order Now"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrsswSWK6sU0-Qczvehd0lz7Yoi_FBgU1HA&s",
    text: "Meat Smash Burger",
    taste: "Has a special taste",
    price: 1500,
    order: "Order Now"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsne0cQsj4aHG8cO5_HR9UsvaVhvZwuwtSQw&s",
    text: "Foodish's Burger",
    taste: "Good & Yummy",
    price: 1900,
    order: "Order Now"
  }
];

const BurgerCard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Top Sellers</h2>
      <div className="row g-4 justify-content-center">
        {TopSeller.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
            <div className="card shadow-sm rounded-4 border-0 w-100">
              <img
                src={item.image}
                className="card-img-top img-fluid"
                alt={item.text}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem"
                }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title mb-2 fw-bold">{item.text}</h5>
                <p className="card-text text-muted mb-3">{item.taste}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center px-2">
                  <h5 className="mb-0 fw-bold">${( item.price/ 100).toFixed(2)}</h5>
                  <button className="btn btn-primary rounded-pill px-3">{item.order}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerCard;
