import React, { Component } from "react";
import TimelinePost from "./TimelinePost";
import "./Timeline.css";
import TestPost from "./TestPost";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <TimelinePost />
        <TestPost />
      </div>
    );
  }
}
