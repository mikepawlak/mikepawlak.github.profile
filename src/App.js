import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { SSL_OP_LEGACY_SERVER_CONNECT } from "constants";

const API_URL = "https://api.mikepawlak.com/v1";

class App extends Component {
  state = {
    profile: {}
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/profile`)
      .then(res => res.data)
      .then(
        data => {
          this.setState({ profile: data });
        },
        err => {
          console.log(err);
        }
      );
  }

  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="App">
          <Header profile={this.state.profile} />
          <Content profile={this.state.profile} />
        </div>
      </div>
    );
  }
}

export default App;
