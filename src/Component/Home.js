
function Home(){
    return(
      <div>
       <div className="container">
            <div className="home-image">
                <img src="home-image.png" alt="home-image"/>
                  <span className="body-content">
                    <h3>India’s 1st multipotential learning platform for young minds.</h3>
                    <p>Get access to an ever-growing bundle of skills and courses with a single subscription.</p>
                    <h5>With Ulipsu</h5>
                    <h1>Learn what you wish to</h1>
                  </span>
        </div>
              
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="image-wrapper">
      <img src="life.png" className="d-block w-10" alt="..." />
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
    </div>
    </div>
    <div className="carousel-item">
      <div className="image-wrapper">
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
      <img src="life.png" className="d-block w-10" alt="..."/>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev carousel-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next carousel-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="video">
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video" allowfullscreen></iframe>
</div>
</div>
<div className="card">
  <img src="age 16-19.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ages 6-16</h5>
  </div>
</div>
<div className="card">
  <img src="home-image1.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ages 6-16</h5>
  </div>
</div>
<div className="card">
  <img src="home-image1.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ages 6-16</h5>
  </div>
</div>
<div className="card">
  <img src="home-image1.png" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ages 6-16</h5>
  </div>
</div>
               

              </div>
  


     
                                                    
    );
};

export default Home;