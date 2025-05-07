import React from "react";

const Mainsection = () => {
  return (
    <section className="text-light pt-5 pb-5 p-lg-0">
      <div className="container-fluid">
        <div className="bg-secondary row align-items-center rounded">
          <div className="col-lg-6 col-md-6 col-12 p-lg-5 p-md-4 p-3 order-lg-1 order-md-1 order-2">
            <h2 className="fs-2 fw-bold" >Yummy tasty <br />🍔 <b style={{color:""}}>burger</b> in the town</h2>
            <p className="lead fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibium magna sed, convallis ex.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-center order-lg-2 order-md-2 order-1">
            <img src="/buger6.jpg" className="img-fluid rounded w-100" style={{ maxHeight: '450px', objectFit: 'cover' }} />
          </div>
          <div className="col-12 d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center justify-content-lg-start justify-content-md-start mt-3 order-lg-3 order-md-3 order-3">
            <button type="button" className="btn btn-primary btn-lg me-lg-3 me-md-3 mb-2 mb-lg-0 mb-md-0" style={{ minWidth: '290px', maxWidth: '200px' }}>Recipe page</button>
            <button type="button" className="btn btn-success btn-lg" style={{ minWidth: '150px', maxWidth: '200px' }}>Recipe Adventure</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainsection;