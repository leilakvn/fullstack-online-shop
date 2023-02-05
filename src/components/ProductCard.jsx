import React from "react";
import { Col } from "reactstrap";
import productImg from "../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <img width="300px" src={item.imgUrl} alt="prodduct" />
        </div>
        <div className="p-2 product__info ">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>

        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
