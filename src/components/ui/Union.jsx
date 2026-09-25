import { useState } from "react"
export default function Union() {

const [name, setName] = useState('');
const [lastname, setLastName] = useState('');

  return (
    <section>
        <div className="container"> 
      <h4 className="my-5">unisci in tempo reale il valore di due input distinti (nome e cognome) 
        visualizzando il risultato completo in un unico elemento di testo
      </h4>
      </div>
              <div className="d-flex justify-content-center align-items-end gap-2 container">
            <p>Unisco i due input (nome e cognome):</p>
            <h1 className="text-success text-uppercase">{name} {lastname}</h1>
            </div><div>
            <label htmlFor="name" className="form-label h4">Inserisci nome</label>
            <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />

            <label htmlFor="lastname" className="form-label h4">Inserisci il cognome</label>
            <input type="text" id="lastname" className="form-control" value={lastname} onChange={e => setLastName(e.target.value)} />
        </div>
        <hr className="border border-danger border-2 opacity-50"></hr>
      </section>
  )
}