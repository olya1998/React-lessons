import styled from "styled-components";
import Price from "./Price";
import Burger from "./Burger";
import Product from "./Product";

const Main = (props) => {
    return (
      <MainStyled>
        <Price />
        <Burger />
        <Product />
      </MainStyled>
    );
  };

const MainStyled = styled.div({
  // height: "10vh",
  width: "100%",
  padding: "0 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export default Main;