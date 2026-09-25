import { useState } from "react"
export default function ButtonDisabled() {

const [active, setActive] = useState(false)

  return (
    <section>
    <div className="container"> 
      <h4 className="my-5">mantieni disabilitato un pulsante di azione finché l'utente non spunta una specifica
        casella di controllo per confermare la volontà di procedere
      </h4>
      <p>Abilita pulsante</p>
      <button disabled={!active} className="btn btn-success">Pulsante</button>
</div>
<div className="py-5">
      <input id="accetto" className="form-check-input" type="checkbox" checked={active} onChange={e => setActive(e.target.checked)}/>
      <label className="px-3">Accetto di attivare il pulsante</label>
    </div>
        <hr className="border border-danger border-2 opacity-50"></hr>
      </section>
  )
}