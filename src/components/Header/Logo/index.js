import styled from "styled-components";
import burger from "./../../../assets/burger.png";
// import Drawer from '@mui/material/Drawer';

const Logo = () => {
  return (
    <LogoStyled>
      <IMGStyled src={burger} alt="Logo" width={40} />
    </LogoStyled>
  );
};

const LogoStyled = styled.div({
  flexBasis: "35%",
});

const IMGStyled = styled.img({
 
});

export default Logo;