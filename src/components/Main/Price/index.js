import styled from "styled-components";

const Price = (props) => {

    const PriceItems = [
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
    ];


    return (
        <PriceStyled>
            <PricesStyled>
                
                {PriceItems.map((item, index) => (
                <PriceItemStyled>
                    {item.name} : {item.price}₴
                </PriceItemStyled>
                ))}
            </PricesStyled>
      </PriceStyled>
    );
  };
  
  const PriceItemStyled = styled.li`
    margin-left: 15px;
    cursor: pointer;
  `;
  
  const PricesStyled = styled.ul`
    padding: 50% 20px;
    list-style: none;
    justify-content: flex-end;
    flex-basis: 35%;
    font-family: "Monsterrat Light";
    cursor: pointer;
    color: green;
  `;

const PriceStyled = styled.div({
    border: "1px solid red",
    position: "relative",
    maxWidth: "12%",
    top: "50px",
    minHeight: "450px",
    flexBasis: "35%",
});

export default Price;