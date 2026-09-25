import { useState } from "react";
export default function RadioButton() {

const [fontSize, setFontSize] = useState("20px");

  return (
    <section style={{ fontSize }}>
      <div className="container">
        <h4 className="my-5">Ridimensiona il testo della pagina in base al radio button selezionato dall'utente</h4>
      </div>

      <div className="container mb-3">
        <div className="form-check">
          <input name="dimension" id="dimension-10" type="radio" className="form-chack-input" value="10px" onChange={e => setFontSize(e.target.value)}/>
          <label htmlFor="dimension-10" className="form-check-label"> Testo 10px</label>
        </div>

        <div className="form-check">
          <input name="dimension" id="dimension-20" type="radio" className="form-chack-input" value="20px" onChange={e => setFontSize(e.target.value)}/>
          <label htmlFor="dimension-20" className="form-check-label"> Testo 20px</label>
        </div>

        <div className="form-check">
          <input name="dimension" id="dimension-30" type="radio" className="form-chack-input" value="30px" onChange={e => setFontSize(e.target.value)}/>
          <label htmlFor="dimension-30" className="form-check-label"> Testo 30px</label>
        </div>

        <div className="form-check">
          <input name="dimension" id="dimension-40" type="radio" className="form-chack-input" value="40px" onChange={e => setFontSize(e.target.value)}/>
          <label htmlFor="dimension-40" className="form-check-label"> Testo 40px</label>
        </div>
      </div>
              <hr className="border border-danger border-2 opacity-50"></hr>

    </section>
  );
}