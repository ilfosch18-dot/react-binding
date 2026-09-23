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

  return (
    <main className="text-center">
      <h4>Implemento un contatore numerico incrementabile via bottone 
      e aggiungo un pulsante dedicato per azzerare istantaneamente il valore.
</h4>
<section>
  <p className="fw-bold fs-1 my-5 text-success">{firstCount}</p>
<button className="btn btn-primary m-3" onClick={handleCounter}>Incrementa</button>
<button className="btn btn-warning" onClick={handleAzzeramento}>Azzera</button>
<hr class="border border-danger border-2 opacity-50"></hr>
</section>
</main>
  )
}