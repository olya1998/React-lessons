import styled from "styled-components";

const MenuItem = ({ children, classToAdd }) => {
  return (
    <MenuItemStyled className={classToAdd}>{children}</MenuItemStyled>
  );
};

const MenuItemStyled = styled.li({
  cursor: "pointer",
  marginLeft: "15px",
});

export default MenuItem;