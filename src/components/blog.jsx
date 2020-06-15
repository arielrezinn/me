import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <section className="ftco-section" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <h1 className="big big-2">Blog</h1>
              <h2 className="mb-4">Our Blog</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry justify-content-end">
                <a href="single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">Sept. 12, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat" /> 3</a>
                    </p>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry justify-content-end">
                <a href="single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">Sept. 12, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat" /> 3</a>
                    </p>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
              <div className="blog-entry">
                <a href="single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                </a>
                <div className="text mt-3 float-right d-block">
                  <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">Sept. 12, 2019</span>
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat"><span className="icon-chat" /> 3</a>
                    </p>
                  </div>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}