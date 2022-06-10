
const Delete = (props) => {

  const deleteItem = () => {
    let propsList = [...props.listaSpesa];
    propsList.splice(props.idx, 1);
    props.setListaSpesa(propsList);
  }

  return (
    <div><button type="button" className="delete" onClick={deleteItem}>Delete</button></div>
  )
}

function Articolo(props){
  let ch;
  ch = <input type="checkbox" checked={props.ch} onChange={(e) => {
        let l = [...props.listaSpesa]
        l[props.idx].fatto = e.target.checked
        props.setListaSpesa(l)
      }} />
  return (<label><div className="articolo">
                      {ch} {<Delete idx={props.idx} setListaSpesa={props.setListaSpesa} listaSpesa={props.listaSpesa}/>}<span className="artTitle">{props.titolo}</span>
                      </div>
          </label>
         )
}

function Lista(props){
  let out = []
  props.listaSpesa.map((i,idx)=>{
    out.push(<Articolo i={i} ch={i.fatto} titolo={i.titolo}  idx={idx} key={idx}
                listaSpesa={props.listaSpesa}
                setListaSpesa={props.setListaSpesa} />)
  })
  return out
}

function ListaSpesa(props) {
  return (
    <div id="ListaSpesa">
      <div>
        <h3>Lista</h3>
        <Lista listaSpesa={props.listaSpesa} setListaSpesa={props.setListaSpesa} />
      </div>
    </div>
  );  
}

export default ListaSpesa;
