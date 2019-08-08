import React from "react";
import { connect } from "react-redux";
import { fetchProducts, loadPost } from "./postActions";
import { Image } from "semantic-ui-react";

const mapStateToProps = state => ({
  products: state.post.items,
  loading: state.post.loading,
  error: state.post.error
});

class TestPost extends React.Component {
  // componentDidMount() {
  //   return function(dispatch) {
  //     dispatch(loadPost());
  //   };
  // }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <div>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </div>
      );
    }

    return (
      <ul>
        {products.post &&
          products.post.map((product, index) => (
            <p key={index}>{product.text}</p>
          ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(TestPost);
