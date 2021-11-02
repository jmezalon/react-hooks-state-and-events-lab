import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [modeOn, setModeOn] = useState(false)

  const appClass = modeOn ? "App dark" : "App light"

  function handleClick() {
    setModeOn(modeOn => !modeOn)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
