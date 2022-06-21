import { useEffect, useState } from "react";

function BitcoinChart() {

    const [actualCryptos, setActualCryptos] = useState([]);
    const tradeWs = new WebSocket('wss://ws.coincap.io/trades/binance');

    useEffect(() => {
        const cryptosList = [];
        tradeWs.onmessage = function (msg) {
            const receivedData = JSON.parse(msg.data);
            let cryptoIndex = cryptosList.findIndex(c => c.base == receivedData.base);
            if (cryptoIndex != -1) {
                cryptosList[cryptoIndex].counter++;
            } else {
                cryptosList.push({
                    base: receivedData.base,
                    counter: 1
                });
            };
            cryptosList.sort((a, b) => b.counter - a.counter )
            setActualCryptos([...cryptosList]);
        }
        setTimeout(() => {
            tradeWs.close();
        }, 20000);
    }, []);
    
    const Chart = (props) => {
        return (
            <div className="classBox">
                    <div className="chart" style={{width: `${props.c.counter / actualCryptos[0].counter * 100}%`}}>{props.c.counter}</div>
            </div>
        );
    }
 
    return (
      <div className="App">
        <h1>Crypto Trends</h1>
        { actualCryptos.map((c, idx) => <div className="crypto" key={idx}><div className="chartLabel">{c.base.toUpperCase()} </div><Chart c={c} idx={idx}/></div>)}
      </div>
    );  
  }
  
  export default BitcoinChart;
  