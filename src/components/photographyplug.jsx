import React, { Component } from 'react'

export default class PhotographyPlug extends Component {
  render() {
    return (
      <section className="ftco-section ftco-hireme img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated">
              <h2>Check out my photography!</h2>
              <p className="mb-0"><a href="#" className="btn btn-primary py-3 px-5">Take a Look</a></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
