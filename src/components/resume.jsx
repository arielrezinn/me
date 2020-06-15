import React, { Component } from 'react'

function Listing(props) {
  return (
    <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
      <div className="icon d-flex align-items-center justify-content-center">
        <span className="flaticon-ideas" />
      </div>
      <div className="text pl-3">
        <span className="date">{props.date}</span>
        <h2>{props.title}</h2>
        <span className="position">{props.subtitle}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function SkillBox(props) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="h5 font-weight-bold text-center mb-4">{props.skillName}</h2>
        <div className="progress mx-auto" data-value={props.skillLevel}>
          <span className="progress-left">
            <span className="progress-bar border-primary" style={{transform: 'rotate(144deg)'}} />
          </span>
          <span className="progress-right">
            <span className="progress-bar border-primary" style={{transform: 'rotate(180deg)'}} />
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">{props.skillLevel}<sup className="small">%</sup></div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0">{props.left}%</div><span className="small text-gray">Last week</span>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0">{props.right}%</div><span className="small text-gray">Last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillBar(props) {
  return (
    <div className="col-md-6 animate-box">
      <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
        <h3>{props.skillName}</h3>
        <div className="progress">
          <div className="progress-bar color-1" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: props.skillLevel }}>
            <span>{props.skillLevel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class Resume extends Component {

  render() {
    return (
      <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <nav id="navi">
                <ul>
                  <li><a href="#page-1" className>Experience</a></li>
                  <li><a href="#page-2" className>Education</a></li>
                  <li><a href="#page-3" className>Skills</a></li>
                  <li><a href="#page-4" className>Awards</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-9">

            <div id="page-1" className="page two">
                <h2 className="heading">Experience</h2>
                <Listing
                  date="2020"
                  title="this is the title"
                  subtitle="this is the subtitle"
                  description="here's a description"
                />
                <Listing
                  date="2014-2015"
                  title="Software Developer"
                  subtitle="Cambridge University"
                  description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                />
              </div>

              <div id="page-2" className="page one">
                <h2 className="heading">Education</h2>
                <Listing
                  date="2014-2015"
                  title="Bachelor of Science in Computer Science"
                  subtitle="Cambridge University"
                  description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                />
              </div>

              <div id="page-3" className="page three">
                <h2 className="heading">Skills</h2>
                <div className="row progress-circle mb-5">
                <SkillBox
                  skillName="CSS"
                  skillLevel="90"
                  left="28"
                  right="60"
                />
                <SkillBox
                  skillName="HTML"
                  skillLevel="80"
                  left="28"
                  right="60"
                />
                <SkillBox
                  skillName="jQuery"
                  skillLevel="75"
                  left="28"
                  right="60"
                />
                </div>
                <div className="row">
                <SkillBar
                  skillName="Photoshop"
                  skillLevel="90%"
                />
                <SkillBar
                  skillName="jQuery"
                  skillLevel="85%"
                />
                <SkillBar
                  skillName="HTML5"
                  skillLevel="95%"
                />
                <SkillBar
                  skillName="CSS"
                  skillLevel="90%"
                />
                </div>
              </div>
              
              <div id="page-4" className="page four">
                <h2 className="heading">Awards</h2>
                <Listing
                  date="2014-2015"
                  title="Art &amp; Creative Director"
                  subtitle="Cambridge University"
                  description="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
