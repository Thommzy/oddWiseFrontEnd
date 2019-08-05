import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./postActions";

const mapStateToProps = state => ({
  products: state.post.items,
  loading: state.post.loading,
  error: state.post.error
});

class TestPost extends React.Component {
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
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.post &&
          products.post.map((product, index) => (
            <h1 key={index}>{product.text}</h1>
          ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(TestPost);
