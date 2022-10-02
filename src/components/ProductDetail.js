import React from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  return <div>Product ID : {params.id}</div>;
};

export default ProductDetail;
