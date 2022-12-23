import styled from "styled-components";

const Product = (props) => {
    return (
      <ProductStyled>
      <h1>test product</h1>
      </ProductStyled>
    );
  };



  const ProductStyled = styled.div({
    border: "1px solid red",
    position: "relative",
    minWidth: "12%",
    top: "50px",
    minHeight: "450px",
    flexBasis: "35%",
  });
export default Product;