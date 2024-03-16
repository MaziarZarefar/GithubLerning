/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      // eslint-disable-next-line react/prop-types, react/prop-types, react/prop-types, react/prop-types
      <h2>{product.title}</h2>
      // eslint-disable-next-line react/prop-types
      <p>{product.body}</p>
    </div>
  );
};

export default Product;