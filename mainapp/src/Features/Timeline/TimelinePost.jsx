import React, { Component } from "react";
import { Card, Icon, Container, Grid, Image } from "semantic-ui-react";
// import FloatButton from "../Button/FloatButton";
import { connect } from "react-redux";

import { fetchProducts } from "./postActions";

// const mapStateToProps = state => ({
//   products: state,
//   loading: state.post,
//   error: state.post
// });

const mapStateToProps = state => ({
  products: state.post.items,
  loading: state.post.loading,
  error: state.post.error
});
// const mapActionsToProps = {
//   loadPost
// };

// const description = [
//   "Amy is a violinist with 2 years experience in the wedding industry.",
//   "She enjoys the outdoors and currently resides in upstate New York."
// ].join(" ");

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
          <Grid>
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <div>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <div>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <div>
                  <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </div>
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
        </Container>
      );
    }
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2} />

            <Grid.Column width={12}>
              {products.products &&
                products.products.map((product, index) => (
                  <Card key={index} className='timelineCard' fluid>
                    <Card.Content header={product.user} />
                    <Card.Content description={product.text} />
                    <Card.Content extra>
                      <Icon name='user' />4 Friends
                      <Icon name='user' />4 Friends
                    </Card.Content>
                  </Card>
                ))}
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(TimelinePost);
