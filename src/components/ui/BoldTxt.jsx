import { useState } from "react"
export default function BoldTxt() {

    // una sola variabile perchè textBold non cambia mai, quindi è possibile omettere setTextBold
const [textBold] = useState('Testo che cambia stile');
  const [bold, setBold] = useState(false);


  return (
    <section>
    <div className="container"> 
      <h4 className="my-5">applica o rimuovi uno stile specifico 
        (es. grassetto, corsivo, sottolineato, evidenziato) ad un testo target quando la checkbox associata viene attivata o disattivata
      </h4>
      </div>
       <div className="d-flex justify-content-center align-items-end gap-2 container">
            <p>Applico o rimuovo uno stile specifico al testo:
                {/******************************************* condizione ? valoreSeVero : valoreSeFalso */}
                <h1 className={`text-success text-uppercase mb-0 ${bold ? "fw-bold" : ""}`}>{textBold}</h1>
                </p>
            </div>
<div className="py-5">
      <input id="text-bold-acceptance" className="form-check-input" type="checkbox" checked={bold} onChange={e => setBold(e.target.checked)}/>
      <label className="px-3">Accetto di far cambiare lo stile del titolo</label>
    </div>
        <hr className="border border-danger border-2 opacity-50"></hr>
      </section>
  )
}