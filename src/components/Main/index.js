import styled from "styled-components";
import Price from "./Price";
import Burger from "./Burger";
import Product from "./Product";

import React from "react";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
          {
              name: "Bacon",
              price: 23
          },
          {
              name: "Cheese",
              price: 24
          },
          {
              name: "Lettuce",
              price: 25
          },
          {
              name: "Sause",
              price: 26
          },
          {
              name: "Tomato",
              price: 27
          },
      ],
      burgerStack: []
    }
  }
  render() {
    return (
      <MainStyled>
        <Price products={this.state.products} />
        <Burger />
        <Product products={this.state.products} />
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