import { useState } from "react";

export default function Counter() {
const [user,setUser] = useState('Armando');


  return (
    <section>
        <div className="container"> 
      <h4 className="my-5">Contatore caratteri: mostra dinamicamente il numero di caratteri inseriti in una casella di input o textarea, 
        aggiornando il conteggio ad ogni digitazione
      </h4>
    <div className="my-5">
        <label htmlFor="user" className="form-label h4">Inserisci il tuo nome qui</label>
        <input type="text" id="user" className="form-control" value={user} onChange={e => setUser(e.target.value)}/>
        <p className="text-start my-2">Conteggio caratteri: {user.length}</p>
      </div>
      </div>
      <hr className="border border-danger border-2 opacity-50"></hr>
    </section>
  )
}