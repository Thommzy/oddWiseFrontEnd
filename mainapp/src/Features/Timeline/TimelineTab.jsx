import React from "react";
import { Tab, Grid } from "semantic-ui-react";
import TimelinePost from "./TimelinePost";

const panes = [
  {
    menuItem: "Odds",
    render: () => (
      <Tab.Pane attached={false}>
        <TimelinePost />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Stories",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Likes",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
  },
  {
    menuItem: "Comment",
    render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>
  }
];

const TimelineTab = () => (
  <Grid>
    <Grid.Column mobile={16} tablet={8} computer={2}></Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={12}>
      <div className="timelineTab">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={2}></Grid.Column>
  </Grid>
);

export default TimelineTab;
