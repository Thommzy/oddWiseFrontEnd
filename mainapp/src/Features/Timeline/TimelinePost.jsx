import React, { Component } from "react";
import { Card, Icon, Container, Grid, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProducts } from "./postActions";
import Shimmer from "../Shimmer/Shimmer";
import { loadPosts } from "../../Actions";

class TimelinePost extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  render() {
    const { postError, postLoading, postSuccess, loadPosts } = this.props;

    if (postError) {
      return <div>Error! {postError.message}</div>;
    }

    return (
      <Container>
        <Grid>
          <Grid.Column mobile={16} tablet={2} computer={0} />
          <Grid.Column mobile={16} tablet={12} computer={16}>
            {postLoading ? (
              <div>
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
              </div>
            ) : (
              postSuccess &&
              postSuccess.map((product, index) => (
                <Card key={index} className="timelineCard" fluid>
                  <Card.Content header={product.user} />
                  <Card.Content description={product.text} />
                  <Card.Content extra>
                    <Icon name="like" />
                    924
                    <Icon name="share alternate" />
                    2.1K
                  </Card.Content>
                </Card>
              ))
            )}
          </Grid.Column>
          <Grid.Column mobile={16} tablet={2} computer={0} />
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ postLoading, postSuccess, postError }) => ({
  postLoading,
  postSuccess,
  postError
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePost);
