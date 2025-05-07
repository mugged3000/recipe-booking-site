import React from "react";

const StepByStepInstructions = () => {
  const burgerSteps = [
  "Gather Ingredients: Ground beef, salt, pepper, buns, cheese, lettuce, tomato, onion, pickles, sauces.",
  "Prepare the Patties: Shape ground beef into patties slightly larger than your buns.",
  "Season the Patties: Generously sprinkle both sides with salt and pepper.",
  "Preheat the Grill or Pan: Heat to medium-high heat before cooking.",
  "Cook the Patties: Grill 3–4 minutes per side; add cheese after flipping if desired.",
  "Toast the Buns: Lightly butter and toast buns until golden brown.",
  "Assemble the Burger: Layer bun, sauce, lettuce, patty, tomato, onion, pickles, and top bun.",
  "Add Condiments: Apply ketchup, mustard, mayo, or other favorite sauces.",
  "Serve and Enjoy: Serve hot with fries, chips, or a fresh salad!"
];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{color:"red",fontWeight:"bold"}}>Step-by-Step Instructions</h2>

      <div className="row">
        {burgerSteps.map((step, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <a href="" style={{color:"black"}}>
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title" style={{color:"green",fontWeight:"bold"}}>Step {index + 1}</h5>
                <p className="card-text">{step}</p>
              </div>
            </div>
             </a>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StepByStepInstructions;
