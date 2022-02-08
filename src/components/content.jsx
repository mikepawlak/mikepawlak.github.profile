import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      positions: [],
      education: [],
      volunteerExp: [],
    };
  }

  componentDidUpdate(prevState) {
    // if (this.props.profile !== prevState.profile) {
    //   this.setState({
    //     profile: this.props.profile,
    //     positions: this.props.profile.positions.slice(0, 3),
    //     education: this.props.profile.educations,
    //     volunteerExp: this.props.profile.volunteerExperience,
    //   });
    // }
  }

  render() {
    return (
      <section className="content-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
            <div className="col-12 col-md-8 jumbo-content">
              <h2 className="resume-header">Work Experience</h2>
              <ul className="positions">
                {/* {this.state.positions.map((el, i) => (
                  <li className="position" key={i}>
                    <div>
                      <h4>{el.title}</h4>
                      <p>
                        <em>{el.date1}</em>
                      </p>
                      <hr />
                    </div>
                  </li>
                ))} */}
                <li className="position">
                  <div>
                    <h4>Software Engineer II - Entegral</h4>
                    <p>
                      <em>Jan 2020 - present</em>
                    </p>
                    <div className="pos-container">
                      <p className="subtitle">Highlights</p>
                      <ul>
                        <li>Transitioned a dozen apis to Kubernetes on GCP</li>
                      </ul>
                      <p className="subtitle">Technologies Used</p>
                      <p>
                        Java, Java Spring, Angular, NestJS, GCP, Kubernetes,
                        Helm, Rabbitmq
                      </p>
                      <p className="subtitle">Responsibilities</p>
                      <p>
                        Develop and maintain various apis, jobs, and workflows
                        hosted on GCP
                      </p>
                    </div>
                    <hr />
                  </div>
                </li>
                <li className="position">
                  <div>
                    <h4>Development Lead - Fleet Farm</h4>
                    <p>
                      <em>Jul 2019 - Jan 2020</em>
                    </p>
                    <div className="pos-container">
                      <p className="subtitle">Technologies Used</p>
                      <p>
                        JavaEE, Java Spring, Hibernate, Oracle SQL, Angular,
                        Sass, NodeJS
                      </p>
                      <p className="subtitle">Responsibilities</p>
                      <p>
                        Act as technical lead on all enterprise web projects for
                        Fleet Farm. Lead an 8 person agile team through all
                        steps of the SDLC.
                      </p>
                    </div>
                    <hr />
                  </div>
                </li>
                <li className="position">
                  <div>
                    <h4>Software Engineer - Fleet Farm</h4>
                    <p>
                      <em>Oct 2018 - Jul 2019</em>
                    </p>
                    <div className="pos-container">
                      <p className="subtitle">Highlights</p>
                      <ul>
                        <li>
                          Acted on lead developer in several projects, including
                          migrations of legacy code, new development, and
                          uplifting projects
                        </li>
                        <li>
                          Developed and implemented documentation process
                          improvement including outage handling process.
                        </li>
                      </ul>
                      <p className="subtitle">Technologies Used</p>
                      <p>
                        JavaEE, Java Spring, Hibernate, Oracle SQL, Angular,
                        Sass, NodeJS
                      </p>
                      <p className="subtitle">Responsibilities</p>
                      <p>
                        Maintain existing, and develop new internal web based
                        applications primarily with an employee facing focus.
                        Work with product owners, QA, and other engineers to
                        steer projects through SDLC.{" "}
                      </p>
                    </div>
                    <hr />
                  </div>
                </li>
                <li className="position">
                  <div>
                    <h4>Senior Website Support Developer - Dealersocket</h4>
                    <p>
                      <em>Dec 2017 - Oct 2018</em>
                    </p>
                    <div className="pos-container">
                      <p className="subtitle">Highlights</p>
                      <ul>
                        <li>
                          Created best practices and documentation utilized by
                          entire website support staff.
                        </li>
                        <li>
                          Built API hooks for third-party plugins currently used
                          across website footprint.
                        </li>
                        <li>
                          Guided high priority clients through website redesign,
                          utilizing both technical aptitude and effective
                          communication.
                        </li>
                      </ul>
                      <p className="subtitle">Technologies Used</p>
                      <p>PHP, JavaScript, HTML/CSS, MySQL</p>
                      <p className="subtitle">Responsibilities </p>
                      <p>
                        Maintained websites for existing customers, built out
                        newly requested features, integrated third party
                        plugins, and guided clients through redesigns. Lead
                        project teams with as many as 5 employees to implement
                        changes across several websites.
                      </p>
                    </div>
                    <hr />
                  </div>
                </li>
                <li className="position">
                  <div>
                    <h4>Website Support Developer - Dealersocket</h4>
                    <p>
                      <em>Aug 2017 - Dec 2017</em>
                    </p>
                    <hr />
                  </div>
                </li>
              </ul>
              <h2 className="resume-header">Education</h2>
              {/* {this.state.education.map((el, i) => (
                <div key={i} className="education-block">
                  <h4>{el.title}</h4>
                  <p>
                    <b>
                      <em>{el.degree}</em>
                    </b>
                    , {el.date2}
                  </p>
                </div>
              ))} */}
              <div className="education-block">
                <h4>University of Wisconsin Oshkosh</h4>
                <p>
                  <b>
                    <em>Bachelor's of Science, Political Science</em>
                  </b>
                  , 2011- 2017
                </p>
              </div>
              <h2 className="resume-header">Volunteer Experience</h2>
              {/* {this.state.volunteerExp.map((el, i) => (
                <div key={i} className="education-block">
                  <h4>{el.experience}</h4>
                  <p>
                    <b>
                      <em>{el.title}</em>
                    </b>
                    , {el.date1}
                  </p>
                </div>
              ))} */}
              <div className="education-block">
                <h4>TEALS</h4>
                <p>
                  <b>
                    <em>Computer Science Teaching Assistant</em>
                  </b>
                  , Jun 2019 - Dec 2019
                </p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
