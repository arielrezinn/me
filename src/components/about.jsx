import React, { Component } from 'react'
import pdf from '../pdfs/Resume.pdf'

export default class About extends Component {
  render() {
    return (
      <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: 'url(images/about.jpg)'}}>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p>
                  I'm a software developer with a passion for helping others, and my ultimate goal is
                  for my work to have a positive impact on people's everyday lives. I'm passionate about
                  designing accessible software and spreading awareness of topics I care about.
                  </p>
                  <p>
                  I'm currently in pursuit of my B.A. in Computer Science at the University of Wisconsin-Madison.
                  Feel free to check out some of my work, and get in touch if you'd like to connect! 
                  You can find my contact information on my resume.
                  </p>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                <div className="text">
                  {/* <p className="mb-4">
                    this snippet is currently not relevant for my purposes but could be used elsewhere in the future
                    <span className="number" data-number={120}>120 </span>
                    <span>Project complete</span>
                  </p> */}
                  <p><a href={pdf} className="btn btn-primary py-3 px-3">View Resume</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
