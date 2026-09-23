// QUARTO ESERCIZIO
import fraseTradotta from "../array/FraseTradotta";
import {useState} from "react";

export default function LanguageButton() {

        const [lingua, setLingua] = useState("italiano");

            const fraseSelezionata = fraseTradotta.find(
  (frase) => frase.lingua === lingua
);

  return (
    <section>
        <h4 className="my-5 text-center">Visualizza un messaggio di benvenuto che si aggiorni in tempo reale scegliendo tra diverse lingue 
            tramite una serie di bottoni dedicati.
        </h4>
        <p className="px-5 text-center">{fraseSelezionata.frase}</p>
                <button className="btn btn-primary m-3" onClick={() => setLingua("italiano")}>Italiano</button>
        <button className="btn btn-primary m-3" onClick={() => setLingua("inglese")}>Inglese</button>
<button className="btn btn-warning m-3" onClick={() => setLingua("francese")}>Francese</button>
<button className="btn btn-success m-3" onClick={() => setLingua("spagnolo")}>Spagnolo</button> 
<hr className="border border-danger border-2 opacity-50"></hr>
</section>
  )
}