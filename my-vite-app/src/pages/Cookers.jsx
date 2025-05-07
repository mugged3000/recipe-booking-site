import React from "react";

const Chef = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1095131624/photo/homemade-hamburgers-on-electric-grill.jpg?s=2048x2048&w=is&k=20&c=6gpFBXvPSBlEygyn25O9V17o1dTBNs1J6VBNcuriwQ0=",
    name: "Smith Aren",
    experience: "21 years of experience",
  },
  
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1281058607/photo/cooking-for-internet-vlogg.webp?s=612x612&w=is&k=20&c=7DvArnFYuBYBeydvrXYQLW6WbVpey5-fCbPo6p-ESdQ=",
    name: "Susan Lithiua",
    experience: "9 years of experience",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/690900360/photo/young-adult-preparing-meal-in-the-kitchen.jpg?s=2048x2048&w=is&k=20&c=b_GKpzQdIUwbYFJ8Ps34-aS-qRqL-JCh8PngJ0S1WbU=",
    name: "Arrevin Kuan",
    experience: "8 years of experience",
  },
];

const ChefCookers = () => {
  return (
    <div className="container py-5">
          <h2 className="text-center" style={{color:"black"}}>See Who Cooks For You</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {Chef.map((user,key) => (
          <div key={key} className="col">
            <div className="card h-100 shadow-sm text-center">
                <a href="">
              <img
                src={user.img}
                className="card-img-top mx-auto mt-3"
                alt={user.name}
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mt-3" style={{color:"orange"}}>  {user.name}</h5>
                <p className="card-text text-muted mb-4">{user.experience}</p>
                <a href="#" className="btn btn-primary mt-auto">View Profile</a>
              </div>
              </a>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCookers;
