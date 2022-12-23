import { bubble } from "react-burger-menu";
import styled from "styled-components";

const Burger = (props) => {
    return (
        <BurgerStyled>
            <BurgerContent>
            <h1>burger price: 1₴</h1>
              <CheckoutButton>checkout</CheckoutButton>
              
            </BurgerContent>
     
      </BurgerStyled>
    );
  };

  const BurgerStyled = styled.div({
    border: "1px solid red",
    position: "relative",
    minWidth: "70%",
    top: "50px",
    minHeight: "450px",
    flexBasis: "35%",
  });

  const BurgerContent = styled.div({
    textAlign: "center",
  });

  const CheckoutButton = styled.button({
    backgroundColor: "blue",
    borderRadius: "8px",
    height: "40px",
    padding: "0 12px 0 12px",
  });

//   const TopBread = styled.div({
//     textAlign: "center",
//   });


export default Burger;