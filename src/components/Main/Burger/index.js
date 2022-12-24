import styled from "styled-components";

const Burger = (props) => {
    return (
        <BurgerStyled>
            <BurgerContent>
            <h1>burger price: 1₴</h1>
              <CheckoutButton>checkout</CheckoutButton>
              <BurgerBuilder>
                <TopBread></TopBread>
                <PlaceHolder>Please, start by adding products...</PlaceHolder>
                <BottomBread></BottomBread>
              </BurgerBuilder>
              
            </BurgerContent>
     
      </BurgerStyled>
    );
  };

  const BurgerStyled = styled.div({
    backgroundColor: "#B0E0E6",
    borderRadius: " 20px",
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
    backgroundColor: "#6495ED",
    borderColor: "#6495ED",
    borderRadius: "8px",
    height: "40px",
    padding: "0 12px 0 12px",
  });

  const BurgerBuilder = styled.div({
    textAlign: "center",
    margin: "20px"
  })

  const TopBread = styled.div({
    background: "linear-gradient(0deg, #A47D45, #DEB582)",
    width: "100%",
    height: "50px",
    borderRadius: "30px 30px 0 0",
  });

  const PlaceHolder = styled.div({
    marginTop: "20px",
    color: "#6495ED",
  })

  const BottomBread = styled.div({
    marginTop: "20px",
    background: "linear-gradient(180deg, #A47D45, #DEB582)",
    width: "100%",
    height: "30px",
    borderRadius: " 0 0 5px 5px",
    
  });

export default Burger;