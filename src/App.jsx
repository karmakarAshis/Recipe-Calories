import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleCook = (foodItem) => {
    const isExist = cart.find(cookExist => cookExist.recipe_id == foodItem.recipe_id);
    if (!isExist) {
      setCart([...cart, foodItem]);
    }
  };

  const handleDelete = (id) => {


    const newCart = cart.filter(item => item.recipe_id != id);
    setCart(newCart);
  }


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="text-center mt-6 mb-6">
        <h1 className="text-5xl mt-6">Our Recipes</h1>
      </div>

      <div className="flex justify-evenly">
        <div className="grid grid-cols-2 gap-8">
          {foods.map((food) => (
            <Menu
              key={food.recipe_id}
              food={food}
              handleCook={handleCook}
            ></Menu>
          ))}
        </div>

        <div className="border-2 border-gray-300 p-4 rounded-2xl">
          <Cart
            cart={cart}
            handleDelete={handleDelete}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
