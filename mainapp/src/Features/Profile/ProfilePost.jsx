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

const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York."
].join(" ");

// const mapStateToProps = state => ({
//   personalPosts: state.ppost.items,
//   loading: state.ppost.loading,
//   error: state.ppost.error
// });
class ProfilePost extends Component {
  // componentDidMount() {
  //   return function(dispatch) {
  //     dispatch(fetchPersonalPosts());
  //   };
  // }
  render() {
    const { personalPosts, error, loading } = this.props;
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
      <Segment className='profilePost'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <ProfilePostTextArea />
              {/* {personalPosts.post &&
                personalPosts.post.map((post, index) => (
                  <Card className='timelineCard' fluid>
                    <Card.Content header='About Amy' />
                    <Card.Content description={personalPosts} />
                    <Card.Content extra>
                      <Button as='div' labelPosition='right'>
                        <Button basic color='blue' icon>
                          <Icon name='heart' />
                          Like
                        </Button>
                        <Label basic color='blue' as='a' pointing='left'>
                          2,048
                        </Label>
                      </Button>
                      <Icon name='user' />4 Friends
                      <Icon name='user' />4 Friends
                    </Card.Content>
                  </Card>
                ))} */}
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={personalPosts} />
                <Card.Content extra>
                  <Button as='div' labelPosition='right'>
                    <Button basic color='blue' icon>
                      <Icon name='heart' />
                      Like
                    </Button>
                    <Label basic color='blue' as='a' pointing='left'>
                      2,048
                    </Label>
                  </Button>
                  <Icon name='user' />4 Friends
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default connect()(ProfilePost);
