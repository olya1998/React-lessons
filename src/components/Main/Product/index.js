import styled from "styled-components";
import Cheese from "./../../../assets/cheese.png";
import Bacon from "./../../../assets/bacon.png";
import Lettuce from "./../../../assets/lettuce.png";
import Tomato from "./../../../assets/tomato.png";
import Sause from "./../../../assets/sause.png";

const assets = {Cheese, Bacon, Lettuce, Tomato, Sause};




const Product = (props) => {
  const products = props.products;
  // нам нужно добавить ещё одну переменную - стек(куда складываем выбранные продукты в нужном порядке) как мы сделали с ценами
  // и как я понял удаять нужно снизу вверх
  //

  const addProduct = (product) => {
    
//  setState(
  };

    return (
      <ProductStyled>
        <h1>Product List</h1>
       
            {products.map((item, index) => (
               <ProductContainer>
                  <ButtonMinus onClick={addProduct()}> - </ButtonMinus>
                  <ProductSum>0</ProductSum>
                  <ButtonPlus> + </ButtonPlus>
                  <Productimage src={assets[item.name]}></Productimage>
                </ProductContainer>
              ))}
           
        
      </ProductStyled>
    );
  };

  const ProductStyled = styled.div({
   // border: "1px solid red",
    position: "relative",
    minWidth: "12%",
    top: "50px",
    minHeight: "450px",
    flexBasis: "35%",
    
    textAlign: "center",
  });

  const ProductContainer = styled.div({
    display: "block",
    textAlign: "center",
    margin: "10px",    
  })
  const ButtonMinus = styled.button({ 
    display: "inline-block",    

    backgroundColor: "red", 

  //  backgroundColor: "#4CAF50", 
  //   border: "1px solid red", 
  
  })

  const ProductSum = styled.div({ 
    display: "inline-block",    
    font: "18px"
  })
  const ButtonPlus = styled.button({ 
    display: "inline-block",    
    backgroundColor: "red",
    // backgroundColor: "#4CAF50", 
    // border: "1px solid red", 
  })
  const Productimage = styled.img({ 
    display: "inline-block",    

  })
export default Product;