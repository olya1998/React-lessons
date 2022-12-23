import { useState } from "react";
import styled from "styled-components";
//import { LanguageSwitcher } from "../../../components/Shared";

const Menu = () => {
  const menuItems = ["Home", "Orders", "Contact", "FAQ"];
  const [active, setActive] = useState(true);

  const handleActiveClass = (event) => {
    setActive(event.target.innerText);
  };
  return (
    <>
      <MenuStyled onClick={handleActiveClass}>
       
        {menuItems.map((item, index) => (
          <MenuItemStyled
            className={`${active === item ? "activeMenu" : ""}`}
            key={item + index}
          >
            {item}
          </MenuItemStyled>
        ))}
      </MenuStyled>
    </>
  );
};

const MenuItemStyled = styled.li`
  margin-left: 15px;
  cursor: pointer;
`;

const MenuStyled = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  flex-basis: 35%;
  font-family: "Monsterrat Light";
  cursor: pointer;
  color: #A9A9A9;
`;

export default Menu;