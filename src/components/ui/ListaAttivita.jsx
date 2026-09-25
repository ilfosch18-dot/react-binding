//  QUINTO ESERCIZIO 
import { useState } from "react";
import attivita from "../array/Attivita";


export default function ListaAttivita() {
  const [attivitaCompletate, setAttivitaCompletate] = useState([]);

  function completaAttivita(id) {
    setAttivitaCompletate((attivitaCompletate) => [
      ...attivitaCompletate,
      id
    ]);
  }

  return (
    <section>
      <h4 className="my-5 text-center">
        Genera una lista di attività permettendo di segnare ogni elemento come
        completato applicando una classe con stile testuale barrato quando
        clicchiamo sull'elemento in questione.
      </h4>

      <ul>
        {attivita.map((item) => (
          <li key={item.id} onClick={() => completaAttivita(item.id)} className={attivitaCompletate.includes(item.id) ? "text-decoration-line-through" : " "}>
            {item.testo}
          </li>
        ))}
      </ul>
    </section>
  );
}