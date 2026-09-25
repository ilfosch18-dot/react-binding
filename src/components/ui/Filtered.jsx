import { nomi } from "../array/Vars";
import { useState } from "react";


export default function Filtered() {

    const [name, setName] = useState('');

    // Derived state
    const filteredName = nomi.filter(item => item.toLowerCase().includes(name.toLowerCase()));

  return (
    <section>
    <div className="container">
      <h4 className="my-5">Filtra istantaneamente un array
        di nomi visualizzati a schermo mostrando solo quelli che contengono la stringa digitata nell'input
      </h4>
 <div className="my-5">
        <label htmlFor="user" className="form-label h4">Inserisci il tuo nome qui</label>
        <input type="text" id="user" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
        </div>

<ul className="list-group">
    {filteredName.map(name => (
    <li className="list-group-item text-capitalize" key={name}>{name}</li>
    ))}
</ul>
</div>
      <hr className="border border-danger border-2 opacity-50"></hr>

    </section>
  )
}
