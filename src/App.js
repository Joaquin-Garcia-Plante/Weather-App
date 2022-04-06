import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import axios from "axios";

function App() {
  const [cities, setCities] = useState([]); //[] --> le da el valor inicial
  //cities = []
  //setCities funcion que actualiza el estado
  let apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  //Funcion que me va a llenar cities
  async function onSearch(city) {
    //metodo que me permite realizarle consultas a una api externa
    let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`); //Realiza la consulta
    // .then((r) => r.json())
    //Para hacerlo asincronico, cuando termina ejecuta el cb que esta dentro de then
    //funcion flecha que responde un valor y lo traduce a otro valor
    //Traducir a json es necesario ya que al usar fetch nos devuelve info rara
    //r --> repuesta
    //Lo que responde este then es lo que recibe el proximo
    //Cuando termine de traducirlo ejecuto...
    if (data.data.main !== undefined) {
      //Para comprobar que hayamos recibido bien la city
      const city = {
        min: Math.round(data.data.main.temp_min), //redondear
        max: Math.round(data.data.main.temp_max),
        img: data.data.weather[0].icon,
        id: data.data.id,
        wind: data.data.wind.speed,
        temp: data.data.main.temp,
        name: data.data.name,
        weather: data.data.weather[0].main,
        clouds: data.data.clouds.all,
        latitud: data.data.coord.lat,
        longitud: data.data.coord.lon,
        key: data.data.id,
      };

      setCities((oldCities) => [...oldCities, city]); //setear basandose en el estado anterior
      //Actualizamos cities
      //oldCities es mi estado anterior
      //...oldCities (copia de old cities)
      //indexo city
      //Genero un nuevo arreglo que obtiene todo lo que tenia hasta el momento y le agrego city
    } else {
      alert("Ciudad no encontrada");
    }
    // });
  }
  //Funcion que nos va a permitir quitar cards que querramos
  function onClose(id) {
    //Recibe id para saber cual borrar
    //Usamos filter para filtrar las ciudades, filter devuelve un arreglo
    //La condicion de filter es que se queden en el arreglo todas las ciudades que sean distintas al id
    //Por lo tanto nos devuelve un arreglo con todas las ciudades que tienen id distinto al que buscamos
    setCities((oldCities) => oldCities.filter((c) => c.id != id));
  }
  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch}></Nav>
      <Cards cities={cities} onClose={onClose}></Cards>
    </div>
  );
}
export default App;
