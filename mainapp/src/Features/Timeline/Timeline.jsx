import React, { Component } from "react";
//import TimelinePost from "./TimelinePost";
import "./Timeline.css";
import NavBar from "../Nav/NavBar";
import TimelineHeader from "./TimelineHeader";
import TimelineTab from "./TimelineTab";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TimelineHeader />
        <TimelineTab />
      </div>
    );
  }
}
