import React, { Component } from 'react'

function InfoBox(props) {
  return (
    <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
      <a href="#" className="services-1 shadow">
        <span className="icon">
          <i className={props.imageName} />
        </span>
        <div className="desc">
          <h3 className="mb-5">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}

export default class Services extends Component {
  render() {
    return (
      <section className="ftco-section" id="services-section">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h1 className="big big-2">Skills</h1>
              <h2 className="mb-4">Skills</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
          <div className="row">
            <InfoBox
              imageName="flaticon-ideas"
              title="Web Development"
              description="This Website (Using React & Bootstrap) + Accessibility?"
            />
            <InfoBox
              imageName="flaticon-analysis"
              title="Web Design"
              description="Wisconsin Singers Page"
            />
            <InfoBox
              imageName="flaticon-flasks"
              title="Photography"
              description="Photography Page"
            />
            <InfoBox
              imageName="flaticon-ux-design"
              title="Graphic Design"
              description="A.O.E. Promo Materials"
            />
            <InfoBox
              imageName="flaticon-innovation"
              title="Work Project Area"
              description="Technologies Used & Description of Said Project"
            />
            <InfoBox
              imageName="flaticon-idea"
              title="Something About Java Development?"
              description="CS400 Final Project"
            />
          </div>
        </div>
      </section>
    )
  }
}
