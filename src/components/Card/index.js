import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState([]);
  const [reais, setReais] = useState(1);
  useEffect(() => {
    axios
      .get("https://economia.awesomeapi.com.br/USD/1")
      .then((response) => setData(response.data[0]))
      .catch((err) => console.log("Deu erro!"));
  }, []);

  function handleChange({ target }) {
    setReais(target.value);
  }

  return (
    <div className="card">
      <div className="subCard">
        <h2>Valor do Dolar: {data.high} </h2>
        <p>
          Data/Hora da última cotação: <p>{data.create_date}</p>
        </p>
      </div>
      <div className="subCard">
        <h3>Converter</h3>
        <p>De: dolar Para: real</p>
        <p>
          $ <input value={reais} onChange={(event) => handleChange(event)} />
        </p>
        <p>
          R$
          <input value={data.high * reais} readOnly />
        </p>
      </div>
    </div>
  );
}
