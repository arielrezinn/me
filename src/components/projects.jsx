import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <section className="ftco-section ftco-project" id="projects-section">
        <div className="container-fluid px-md-0">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h1 className="big big-2">Projects</h1>
              <h2 className="mb-4">My Projects</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: 'url(images/work-1.jpg)'}}>
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: 'url(images/work-2.jpg)'}}>
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: 'url(images/work-3.jpg)'}}>
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: 'url(images/work-4.jpg)'}}>
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: 'url(images/work-5.jpg)'}}>
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated" style={{backgroundImage: 'url(images/work-6.jpg)'}}>
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
