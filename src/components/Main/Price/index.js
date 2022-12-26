import styled from "styled-components";

const Price = (props) => {
    const prices = props.prices;

    return(
        <PriceDiv>
            <PriceList>
                <p>Our prices</p>
                {prices.map((item, index) => (
                <PriceItem>
                    {item.name} : {item.price}₴
                </PriceItem>
                ))}
            </PriceList>
      </PriceDiv>
    
)}
  
  const PriceItem = styled.li`
    margin-left: 15px;
    cursor: pointer;
  `;
  
  const PriceList = styled.ul`
    text-align: center;
    padding: 50% 20px;
    list-style: none;
    justify-content: flex-end;
    flex-basis: 35%;
    font-family: "Monsterrat Light";
    cursor: pointer;
    color: #1E90FF;
  `;

const PriceDiv = styled.div({
    
    position: "relative",
    maxWidth: "12%",
    top: "50px",
    height: "400px",
    flexBasis: "35%",
});

export default Price;