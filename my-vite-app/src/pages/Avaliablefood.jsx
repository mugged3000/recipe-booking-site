import React from "react";

const foods = [
  { title: "Burger", image: "/buger2.jpg" },
  { title: "Pizza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeo_JMT1ZvwUNMHneItLQcNgYbwRsSs2mqYA&s" },
  { title: "Salad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EkloJlvBMpQabC7FkJQQCC9C1syzqmqhMg&s" },
  { title: "Fries", image: "https://sausagemaker.com/wp-content/uploads/Homemade-French-Fries_8.jpg" },
  { title: "Drinks", image: "/drinks.jpg" },
  { title: "Snacks", image: "/snacks1.jpg" }
];

const FoodCard = () => {
  return (
    <section className="py-5">
    <div className="container-fluid ">
      <h2 className="text-center pb-4" style={{ color: "orange", fontWeight: "bold" }}>
        Available Items
      </h2>
      <div className="row g-4 justify-content-center">
        {foods.map((food, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img
                src={food.image}
                className="card-img-top img-fluid"
                alt={food.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem"
                }}
              />
              <div className="card-body text-center p-2">
                <h6 className="card-title mb-0" style={{ color: "orange", fontSize: "1.1rem" }}>
                  {food.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FoodCard;
