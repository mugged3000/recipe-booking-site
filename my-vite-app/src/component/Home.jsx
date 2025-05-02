
import React from "react";

const Mainsection = () => {
  return (
    <section className="text-light pt-5 pb-5 p-lg-0">
      <div className="container-fluid">
        <div className="bg-secondary row align-items-center rounded">
          <div className="col-lg-6 col-md-6 col-sm-12 p-5 ">
            <h2 className="display-4">Adventure <br /> Of Delicacies</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-lg-end text-md-end">
            <img src="/recipefood.jpg" className="img-fluid rounded" />
          </div>
          <div className="col-12 d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center justify-content-lg-start justify-content-md-start mt-3">
            <button type="button" className="btn btn-primary btn-lg me-lg-3 me-md-3 mb-2 mb-lg-0 mb-md-0" style={{ minWidth: '150px', maxWidth: '200px' }}>Recipe page</button>
            <button type="button" className="btn btn-success btn-lg" style={{ minWidth: '150px', maxWidth: '200px' }}>Recipe Adventure</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainsection;