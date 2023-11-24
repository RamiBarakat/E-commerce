import react, { useState } from "react"
import Nav from "./Navigation/Nav"
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from './db/data'
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory ] = useState(null)

  //Input Filter
  const [query, setQuery] = useState("")


  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  // Radio Filter
  const handleChange= event => {
    setSelectedCategory(event.target.value)
  }

  //Buttons Filter
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    if (selected) {
      filteredProducts = products.filter(
        ({ category, color, company, newPrice, title}) =>
        category === selected || 
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      )
    }

    if(query) {
      filteredProducts = filteredItems
    }

    return filteredProducts.map(
      ({img, title, star, reviews, newPrice, prevPrice}) => (
        <Card 
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice} />

      )
    )

  }

  const result = filteredData(products, selectedCategory, query)
  
  return (
    <>
   <Sidebar handleChange={handleChange}/>
   <Nav query={query} handleInputChange={handleInputChange}/>
   
   <Products result={result}/>
   </>
  );
}

export default App;
