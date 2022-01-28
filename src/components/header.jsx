import React, { Component } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      position: "",
      socialLinks: [
        {
          name: "github",
          icon: <FaGithub />,
          link: "https://github.com/mikepawlak",
        },
        {
          name: "linkedin",
          icon: <FaLinkedin />,
          link: "https://linkedin.com/in/pawlak-mike/",
        },
        {
          name: "stackoverflow",
          icon: <FaStackOverflow />,
          link: "https://stackoverflow.com/users/4869078/mpawlak?tab=profile",
        },
        {
          name: "email",
          icon: <FaEnvelope />,
          link: "mailto:mpawlak719@gmail.com",
        },
      ],
    };
  }

  componentDidUpdate(prevState) {
    if (this.props.profile !== prevState.profile) {
      this.setState({
        profile: this.props.profile,
        position: this.props.profile.profile.headline,
        location: this.props.profile.profile.location,
      });
    }
  }

  render() {
    return (
      <header className="header-container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="col"></div>
              <div className="col-12 col-md-8 jumbo-content">
                <div className="jumbo-wrapper">
                  <p className="lead" style={{ textAlign: "left" }}>
                    {" "}
                    Hello, my name is
                  </p>
                  <h1 className="display-4 main-title"> &#60;Mike&#47;&#62;</h1>
                  <p className="lead" style={{ textAlign: "right" }}>
                    and I solve problems with code.
                  </p>
                </div>
                <br />
                <hr className="jumbo-break" />
                <p className="lead">
                  I am currently a{" "}
                  <span className="emph">Software Engineer</span> in{" "}
                  <span className="emph">Madison, WI</span>
                </p>
                <p className="lead">
                  {this.state.socialLinks.map((el, i) => (
                    <a
                      key={i}
                      className="social-link"
                      href={el.link}
                      alt={el.name}
                    >
                      {el.icon}
                    </a>
                  ))}
                </p>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
