import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux/es/exports";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; // 없으면 빈값
    console.log("쿼리값은?", searchQuery);
    // dispatch가 Middleware을 거쳐서 reducer로 간다.
    // searchQuery 값을 매개변수를 통해 getProducts 함수로 전달
    dispatch(productAction.getProducts(searchQuery));
  };
  // api호출은 useEffect에서
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      {/* Container : 아이템을 가운데 둘 수 있게 해준다 */}
      <Container>
        <Row>
          {productList &&
            productList.map((menu) => (
              <Col lg={3}>
                {" "}
                <ProductCard item={menu} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
