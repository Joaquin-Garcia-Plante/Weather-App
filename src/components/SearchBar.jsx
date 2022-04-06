import React, { useState } from "react";
import { searchbar, searchbtn } from "../styles/searchBar.module.css";
export default function SearchBar({ onSearch }) {
  let [city, setCity] = useState(""); //mi valor inicial va a ser un string vacio
  return (
    <div>
      {console.log(city)}
      <form
        className={searchbar}
        action=""
        onSubmit={(e) => {
          e.preventDefault(); //para prevenir que se nos recargue la pagina
          onSearch(city);
          setCity(""); //Para vaciar el input
        }}
      >
        <input type="text" name="search" pattern=".*\S.*" required value={city} onChange={(e) => setCity(e.target.value)} />
        <button className={searchbtn} type="submit">
          {/* <span>Search</span> */}
        </button>
      </form>
    </div>
  );
}
