import React, { Component } from "react";
import TimelinePost from "./TimelinePost";
import "./Timeline.css";
import NavBar from "../Nav/NavBar";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TimelinePost />
      </div>
    );
  }
}
