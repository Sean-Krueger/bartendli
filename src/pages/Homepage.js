import { useEffect, useState } from "react";
import drinkAPI from "../apis/drinkAPI";
import Navbar from "../components/Navbar"
// import drinkAPI from "../apis/drinkAPI"

const Homepage = () => {
const [cocktails, setCocktails] = useState()

// useEffect(() => {
//   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//   .then(res => res.json())
//   .then(console.log)
// }, []);

useEffect(() => {
  const fetchData = async () => {
    const response = await drinkAPI.get("/random.php");
    setCocktails(response.data);
  };
    fetchData();
}, []);

    return (
        <div className="header">
          <h1> Bartendli </h1>
          <Navbar />
        </div>
    )
}

export default Homepage
