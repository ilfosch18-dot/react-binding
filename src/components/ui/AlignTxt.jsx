import { useState } from "react"
export default function AlignTxt() {

// TERZO ESERCIZIO
const [alignText, setAlignText] = useState("text-start");

function alignStart() {
  setAlignText("text-start");
}

function alignCenter() {
  setAlignText("text-center");
}

function alignEnd() {
  setAlignText("text-end");
}
  return (
    <main className="text-center">

      <h4 className="my-5">Creare un componente con tre pulsanti ed un paragrafo. Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo. 
      <br></br>Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato
</h4>
<p className={`px-5 ${alignText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Exercitationem pariatur itaque rem tempore dicta repudiandae voluptatem minima vitae blanditiis, odio, 
    aspernatur sapiente consequatur suscipit, atque sit repellendus natus iusto libero.</p>
<button className="btn btn-primary m-3" onClick={alignStart}>Sinistra</button>
<button className="btn btn-warning m-3" onClick={alignCenter}>Centro</button>
<button className="btn btn-success m-3" onClick={alignEnd}>Destra</button> 
<hr className="border border-danger border-2 opacity-50"></hr>

</main>
  )
};

  