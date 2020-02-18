import React, { Component } from "react";
import { Card, Icon, Container, Grid, Image } from "semantic-ui-react";

import { connect } from "react-redux";

import { fetchProducts } from "./postActions";
import Shimmer from "../Shimmer/Shimmer";

const mapStateToProps = state => ({
  products: state.post.items,
  loading: state.post.loading,
  error: state.post.error
});

class TimelinePost extends Component {
  componentDidMount() {
    return function(dispatch) {
      dispatch(fetchProducts());
    };
  }
  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <Container>
          <div>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        </Container>
      );
    }
    return (
      <Container>
        <Grid>
          <Grid.Column mobile={16} tablet={2} computer={0} />
          <Grid.Column mobile={16} tablet={12} computer={16}>
            {products.products &&
              products.products.map((product, index) => (
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
              ))}
          </Grid.Column>
          <Grid.Column mobile={16} tablet={2} computer={0} />
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(TimelinePost);
