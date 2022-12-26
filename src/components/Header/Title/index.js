import styled from "styled-components";

const Title = () => {
  return <TitleStyled>Create your own burger</TitleStyled>;
};

const TitleStyled = styled.h1({
  textAlign: "center",
  flexBasis: "30%",
  fontFamily: "Monsterrat Bold",
  color: "#1E90FF"
});

export default Title;