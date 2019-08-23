import React, { Component } from "react";
import {
  Segment,
  Grid,
  Card,
  Icon,
  Button,
  Label,
  Image,
  Container
} from "semantic-ui-react";
import ProfilePostTextArea from "./ProfilePostTextArea";
// import { fetchPersonalPosts } from "./ProfilePostAction";
import { connect } from "react-redux";
import { fetchProfileProducts } from "./ProfileFetchData/ProfilefetchAction";
import DeleteButton from "./DeleteButton";
import { deletePost } from "./ProfilePostAction";
import Shimmer from "../Shimmer/Shimmer";
import { likePost } from "./LikeAndUnlike/LikeActions";

// const description = [
//   "Amy is a violinist with 2 years experience in the wedding industry.",
//   "She enjoys the outdoors and currently resides in upstate New York."
// ].join(" ");

const mapStateToProps = state => ({
  personalPosts: state.profileFetchReducer.items,
  loading: state.profileFetchReducer.loading,
  error: state.profileFetchReducer.error
});

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
      // window.location.reload();
    },
    onLike: id => {
      dispatch(likePost(id));
      //localStorage.setItem("pointPost", "l");
      //this.setState(localStorage.setItem("pointPost", this.props.id));
      // window.location.reload();
    }
  };
};

// const loadingImage = {
//   height: "105px",
//   width: "100%"
// };

// function addBox() {
//   console.log(this.props.personalPosts.products[0]._id);
// }

class ProfilePost extends Component {
  // handleClick(e) {
  //   e.preventDefault();
  //   console.log("hello");
  // }
  sendId() {
    //console.log("testing");
    localStorage.setItem("pointPost", "5d5ebc5e6daaa90017f60cf2");
    //const pId = localStorage.getItem("pointPost");
  }
  //close = () => this.setState({ open: false });

  componentDidMount() {
    return function(dispatch) {
      dispatch(fetchProfileProducts());
    };
  }
  //check = () => this.setState({ open: false });

  render() {
    const { personalPosts, error, loading } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <Container>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </Container>
      );
    }
    return (
      <Segment className='profilePost'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <ProfilePostTextArea />
              {personalPosts.products &&
                personalPosts.products.map((product, index) => (
                  <Card key={index} className='timelineCard' fluid>
                    <Card.Content header={product.user} />
                    <Card.Content description={product.text} />
                    <Card.Content extra>
                      <Button
                        // onClick={this.props.onLike}
                        onClick={() => {
                          localStorage.setItem("pointPost", product._id);
                          this.props.onLike();
                        }}
                        // id={product._id}
                        as='div'
                        labelPosition='right'
                      >
                        <Button basic color='blue'>
                          <Icon
                            name='heart'
                            color={!this.props.onLike ? "red" : "green"}
                            border='2px blue solid'
                          />
                        </Button>
                        <Label
                          key={index}
                          basic
                          color='red'
                          as='a'
                          pointing='left'
                        >
                          {product.likecounter > 1
                            ? product.likecounter + 1
                            : product.likecounter}
                        </Label>
                      </Button>
                      <Button as='div' labelPosition='right'>
                        <DeleteButton
                          id={product._id}
                          onDelete={this.props.onDelete}
                          // close={this.close}
                        />
                        {/* <Button basic color='red' icon>
                          <Icon name='delete' />
                          Delete
                        </Button> */}
                      </Button>
                    </Card.Content>
                  </Card>
                ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePost);
