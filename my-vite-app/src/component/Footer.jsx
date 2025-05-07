

const FooterSection = () => {
  return (
    <>
    <footer className="bg-dark bg-color text-light p-5  text-center text-lg-start mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Our Story</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Recipe Categories</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Breakfast</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Lunch</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Dinner</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social Media</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Facebook</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Instagram</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Subscribe</h5>
            <p>Get the latest recipes and updates!</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>&copy; 2023 Recipe Book. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
  
};
export default FooterSection;