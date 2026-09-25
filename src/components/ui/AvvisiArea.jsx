import { useState } from "react";
export default function AvvisiArea() {

const [avvisoArea, setAvvisoArea] = useState('');
let lunghezzatesto = "Troppo corto";

  if (avvisoArea.length >= 100) {lunghezzatesto = "Troppo lungo";}
  else if (avvisoArea.length >= 30 ) {lunghezzatesto = "Lunghezza ottimale";}

  return (
    <section>
      <div className="container">
        <h4 className="my-5">mostra degli avvisi riguardo la quantità di testo scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale)</h4>
      </div>
          <div className="my-5 container">
            <p className="h3 text-warning">{lunghezzatesto}</p>
        <label htmlFor="area" className="form-label h4">Scrivi qui un pensiero (max:200 caratteri)</label>
        <textarea id="area" className="form-control" value={avvisoArea} onChange={e => setAvvisoArea(e.target.value)}></textarea>

      </div>
        <hr className="border border-danger border-2 opacity-50"></hr>
    </section>
  )
}