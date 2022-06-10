import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './components/Header';
import Modal  from './components/Modal';
import ListaSpesa from './components/ListaSpesa'
import './style/style.css'

function App(){
  const [listaSpesa, setListaSpesa] = useState([
    {fatto: false, titolo:'Pane'},
    {fatto: true, titolo:'Uova'},
    {fatto: false, titolo:'Latte'},
  ]);
  const [modalVisible, setModalVisible] = useState(false)
  let mux = <Modal setListaSpesa={setListaSpesa} listaSpesa={listaSpesa} setModalVisible={setModalVisible} />
  return (
    <div className="App">
      <Header setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      { modalVisible ? mux : false }
      <ListaSpesa listaSpesa={listaSpesa} setListaSpesa={setListaSpesa} /> 
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
