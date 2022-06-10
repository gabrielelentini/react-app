

function Header(props) {
  return (
    <div id="Header">
      SpesaByte
      <button type="button" onClick={()=>{
        props.setModalVisible(true)
      }}>+</button>
      {props.modalVisible ? <button type="button" className="closeModal" onClick={() => { props.setModalVisible(false)} }>X</button> : null }
    </div>
  );  
}

export default Header;
