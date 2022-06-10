import './App.css';

function App() {

  const squareClass = (i) => (i % 2 === 0 ? "yellow" : "blue");

  const squares = [];

  for (let i = 0; i <= 15; i++) {
    squares.push({
      id: i
    });
  };

  const Square = (props) => {
    return <div className={props.colorClass}>{props.index}</div>
  }

  return (
    <div className="flexbox">
          { squares.map(s => <Square colorClass={squareClass(s.id)} index={s.id} key={s.id} />) }
    </div>

  );
}

export default App;
