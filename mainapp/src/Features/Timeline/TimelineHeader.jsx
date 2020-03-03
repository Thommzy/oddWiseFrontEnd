import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { Header, Grid, Icon } from "semantic-ui-react";
import TimelineAvatar from "./TimelineAvatar";
import { Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
//import TextArea from "../../app/Common/Form/RealTextArea";

class TimelineHeader extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column mobile={1} tablet={2} computer={2}></Grid.Column>
          <Grid.Column mobile={14} tablet={12} computer={12}>
            <Grid>
              <Grid.Column mobile={2} tablet={1} computer={1}>
                <TimelineAvatar />
              </Grid.Column>
              <Grid.Column mobile={12} tablet={14} computer={14}>
                {/* <div className="TimelineTweetDiv">
                  <Form>
                    <Field
                      name="tweet"
                      component={TextArea}
                      rows={2}
                      placeholder="What's on Your mind?"
                    />
                  </Form>
                </div> */}
              </Grid.Column>
              <Grid.Column mobile={1} tablet={1} computer={1}>
                <div className="uploadIcon">
                  <Icon name="images" />
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column mobile={1} tablet={2} computer={2}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

const reduxTimelineTextArea = reduxForm({
  form: "TimelineTexArea"
})(TimelineHeader);

export default connect(null)(reduxTimelineTextArea);
