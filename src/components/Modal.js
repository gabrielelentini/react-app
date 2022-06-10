import React, {useState} from 'react';

const ErrorMessage = (props) => {
  return (
    <div className="errorMessage">{props.message}</div>
  )
}

function Modal(props) {
  const [titolo, setTitolo] = useState('')
  const [error, setError] = useState('');

  return (
    <div id="Modal">
      {error ? <ErrorMessage message={'Titolo non valido.'}/> : null }
      Titolo
      <input type="text" className={error != "" ? true : false} value={titolo}  onChange={(e)=>{
        setTitolo(e.target.value);
        if (e.target.value != "" && e.target.value) {
          setError(false);
         }
        }}  />
      <button disabled={ error != "" ? true : false } type="button" onClick={()=>{
                if (titolo != "") {
                  let l = [...props.listaSpesa]
                  l.push({
                    fatto:  false,
                    titolo: titolo
                  })
                  props.setListaSpesa(l)
                  props.setModalVisible(false)
                } else {
                  setError('invalidInput');
                }
            }}>Aggiungi</button>
    </div>
  );  
}

export default Modal;
