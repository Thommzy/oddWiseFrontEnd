import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon
} from "semantic-ui-react";

const Home = ({ history }) => {
  return (
    <div>
      <Segment inverted textAlign='center' vertical className='oddWiseHome'>
        <Container text>
          <Image src='/assets/images/oddWise1.png' size='medium' />
          <Image
            src='/assets/images/oddWise2.png'
            size='medium'
            className='HomePageSecondImage'
          />
          <Header as='h1' inverted>
            <Image
              size='massive'
              src='/assets/logo.png'
              alt='logo'
              style={{ marginBottom: 12 }}
            />
            Odd-Wise
          </Header>
          <Button onClick={() => history.push("/login")} size='huge' inverted>
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
    </div>
  );
};

export default Home;
