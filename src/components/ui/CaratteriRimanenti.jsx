import { useState } from "react";
export default function CaratteriRimanenti() {

    const [area, setArea] = useState('');

    const caratteriTotali = 200;
  return (
    <section>
      <div className="container">
        <h4 className="my-5">mostra il numero di caratteri rimanenti da scrivere durante la digitazione in una textarea</h4>
      </div>
          <div className="my-5 container">
        <label htmlFor="area" className="form-label h4">Scrivi qui un pensiero (max:200 caratteri)</label>
        <textarea type="text-area" id="area" className="form-control" value={area} onChange={e => setArea(e.target.value)}/>
        <p className="text-start my-2">Conteggio caratteri rimanenti: {caratteriTotali - area.length}</p>
      </div>
        <hr className="border border-danger border-2 opacity-50"></hr>
    </section>
  )
}