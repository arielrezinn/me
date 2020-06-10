import React, { Component } from 'react'

export default class ItemCounter extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
        <div className="container-fluid px-md-5">
          <div className="row d-md-flex align-items-center">
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number={100}>100</strong>
                  <span>Awards</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number={1200}>1,200</strong>
                  <span>Complete Projects</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number={1200}>1,200</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
              <div className="block-18 shadow">
                <div className="text">
                  <strong className="number" data-number={500}>500</strong>
                  <span>Cups of coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
