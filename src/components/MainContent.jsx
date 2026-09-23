import { useState } from "react"

export default function Main() {

  // PRIMO ESERCIZIO
  const [firstCount, setFirstCount] = useState(0)
  function handleCounter(){
    setFirstCount(firstCount +1);
  }

  function handleAzzeramento(){
    setFirstCount(0);
  }

  // SECONDO ESERCIZIO
  const [color, setColor] = useState("btn btn-primary")

  function handleColorChange(){
  setColor(color === "btn btn-primary" ? "btn btn-success" : "btn btn-primary");  
  }

  // TERZO ESERCIZIO
  return (
    <main className="text-center">
      <h4>Implemento un contatore numerico incrementabile via bottone 
      e aggiungo un pulsante dedicato per azzerare istantaneamente il valore.
</h4>
<section>
  <p className="fw-bold fs-1 my-5 text-success">{firstCount}</p>
<button className="btn btn-primary m-3" onClick={handleCounter}>Incrementa</button>
<button className="btn btn-warning" onClick={handleAzzeramento}>Azzera</button>
<hr className="border border-danger border-2 opacity-50"></hr>
<section>
  <h4 className="my-5"> Creo un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, 
    mutandone dinamicamente l'aspetto grafico.
</h4>
<button className={color} onClick={handleColorChange}>Cambia colore</button>


<hr className="border border-danger border-2 opacity-50"></hr>
</section>
</section>
</main>
  )
}