import React, { Component } from "react";
import {
  Segment,
  Grid,
  Card,
  Icon,
  Button,
  Label,
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
import { loadProfile } from "../../Actions/ProfileActions";

class ProfilePost extends Component {
  componentDidMount() {
    this.props.loadProfilePosts();
  }

  render() {
    const {
      profileSuccess,
      profileError,
      profileLoading,
      trackHistory
    } = this.props;
    if (profileError) {
      return <div>Error! {profileError.message}</div>;
    }

    if (profileLoading) {
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
      <Segment className="profilePost">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <ProfilePostTextArea trackHistory={trackHistory} />
              {profileSuccess &&
                profileSuccess.map((products, i) => (
                  <Card key={i} className="timelineCard" fluid>
                    {products.user.map((subitem, i) => (
                      <Card.Content key={i} header={subitem.email} />
                    ))}
                    <Card.Content description={products.text} />
                    <Card.Content extra>
                      <Button
                        // onClick={this.props.onLike}
                        onClick={() => {
                          localStorage.setItem("pointPost", products._id);
                          this.props.onLike();
                        }}
                        // id={product._id}
                        as="div"
                        labelPosition="right"
                      >
                        <Button basic color="blue">
                          <Icon
                            name="heart"
                            color={!this.props.onLike ? "red" : "green"}
                            border="2px blue solid"
                          />
                        </Button>
                        <Label key={i} basic color="red" as="a" pointing="left">
                          {products.likecounter > 1
                            ? products.likecounter + 1
                            : products.likecounter}
                        </Label>
                      </Button>
                      <Button as="div" labelPosition="right">
                        <DeleteButton
                          id={products._id}
                          onDelete={this.props.onDelete}
                          // close={this.close}
                        />
                        <Button basic color="red" icon>
                          <Icon name="delete" />
                          Delete
                        </Button>
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

const mapStateToProps = ({ profileLoading, profileSuccess, profileError }) => ({
  profileLoading,
  profileSuccess,
  profileError
});

const mapDispatchToProps = dispatch => ({
  loadProfilePosts: () => dispatch(loadProfile())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePost);
