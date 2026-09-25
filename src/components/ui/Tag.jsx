import { useState } from "react";
export default function Tag() {

const [text, setText] = useState('');

  return (
     <section>
        <h4 className="my-5 text-center">aggiorna il contenuto di un tag {"<h1>"} con il testo inserito dall'utente in una casella di input, sostituendo il valore precedente ad ogni modifica.
        </h4>

        <div className="d-flex justify-content-center align-items-end gap-2 container">
            <p>Testo del tag {"<h1>"} da modificare:</p>
            <h1 className="text-success text-uppercase">{text}</h1>
            </div><div>
            <label htmlFor="txt" className="form-label h4">
                Modifica il testo
            </label>
            <input type="text" id="txt" className="form-control" value={text} onChange={e => setText(e.target.value)} />
        </div>
        <hr className="border border-danger border-2 opacity-50"></hr>
        </section>
  )
}