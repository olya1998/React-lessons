import styled from "styled-components";
import Price from "./Price";
import Burger from "./Burger";
import Product from "./Product";

import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      prices: [
          {
              name: "Bacon",
              price: 23
          },
          {
              name: "Cheese",
              price: 24
          },
          {
              name: "Salad",
              price: 25
          },
          {
              name: "Picled",
              price: 26
          },
          {
              name: "Meat",
              price: 27
          },
      ]
    }
  }
  render() {
    return (
      <MainStyled>
        <Price prices={this.state.prices} />
        <Burger />
        <Product />
      </MainStyled>
    );
  }
   
  };

const MainStyled = styled.div({
  width: "100%",
  padding: "0 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export default Main;