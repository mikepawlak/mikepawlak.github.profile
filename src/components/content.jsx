import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      positions: [],
      education: [],
      volunteerExp: []
    };
  }

  componentDidUpdate(prevState) {
    if (this.props.profile !== prevState.profile) {
      this.setState({
        profile: this.props.profile,
        positions: this.props.profile.positions.slice(0, 3),
        education: this.props.profile.educations,
        volunteerExp: this.props.profile.volunteerExperience
      });
    }
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
                {this.state.positions.map((el, i) => (
                  <li className="position" key={i}>
                    <div>
                      <h4>{el.title}</h4>
                      <p>
                        <em>{el.date1}</em>
                      </p>
                      <hr />
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="resume-header">Education</h2>
              {this.state.education.map((el, i) => (
                <div key={i} className="education-block">
                  <h4>{el.title}</h4>
                  <p>
                    <b>
                      <em>{el.degree}</em>
                    </b>
                    , {el.date2}
                  </p>
                </div>
              ))}
              <h2 className="resume-header">Volunteer Experience</h2>
              {this.state.volunteerExp.map((el, i) => (
                <div key={i} className="education-block">
                  <h4>{el.experience}</h4>
                  <p>
                    <b>
                      <em>{el.title}</em>
                    </b>
                    , {el.date1}
                  </p>
                </div>
              ))}
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
