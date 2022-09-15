// Middleware 함수
// 함수를 return
// 이 함수는 항상 dispatch와 getState 매개변수를 가진다.
// dispatch : Action을 줌
// getState : 현재의 state 정보를 받아볼 수 있다.

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mynameisleesiwon/hnm-react-router-practice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    // reducer로 보냄
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/mynameisleesiwon/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
