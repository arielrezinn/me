import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
      <section className="hero-wrap js-fullheight" style={{height: '778px'}}>
        <div className="overlay"/>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center" style={{height: '778px'}}>
            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
              <div className="text text-center">
                <span className="subheading">Hello there! I am</span>
                <h1>Ariel Rezin</h1>
                <h2>I'm a {' '}
                  <span
                    className="txt-rotate"
                    data-period={2000}
                    data-rotate="[ &quot;Software Developer.&quot;, &quot;Something else.&quot;, &quot;Photographer.&quot; ]"></span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel"><span className="ion-ios-arrow-round-down" /></div>
          </a>
        </div>
      </section>
      </div>
    )
  }
}
