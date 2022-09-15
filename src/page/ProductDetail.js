import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  const { id } = useParams();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  const goToMain = () => {
    navigate("/");
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <h3>{product?.title}</h3>
          <div>\{product?.price}</div>
          <div>
            <DropdownButton id="dropdown-basic-button" title="사이즈">
              <Dropdown.Item href="#/action-1">
                {product?.size[0]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                {" "}
                {product?.size[1]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                {" "}
                {product?.size[2]}
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <Button variant="dark">추가</Button>
            <Button variant="light" onClick={goToMain}>
              뒤로가기
            </Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
