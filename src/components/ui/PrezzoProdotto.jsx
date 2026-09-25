import { useState } from "react";
export default function PrezzoProdotto() {

    const [value, setValue] = useState("EUR");

  let prezzo = "€ 100,00";

  if (value === "USD") {prezzo = "$ 108,00";}

  else if (value === "GBP") {prezzo = "£ 86,00";}


  return (
    <section>
      <div className="container">
        <h4 className="my-5">
          Converti e mostra il prezzo di un prodotto fisso in diverse valute
          (EUR, USD, GBP) aggiornando il simbolo e il valore in base alla select.
        </h4>

        <div className="my-5">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <h2 className="mb-0">Prezzo prodotto:</h2>
            <h2 className="text-success mb-0">{prezzo}</h2>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="currency" className="form-label h5">
            Seleziona la valuta
          </label>

          <select id="currency" className="form-select" value={value} onChange={e => setValue(e.target.value)}>
            <option value="EUR">EUR - Euro</option>
            <option value="USD">USD - Dollaro americano</option>
            <option value="GBP">GBP - Sterlina britannica</option>
          </select>
        </div>

      </div>
              <hr className="border border-danger border-2 opacity-50" />

    </section>
  );
}