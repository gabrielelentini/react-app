
import { useEffect, useState } from "react";
import { React }  from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DataGrid from './DataGrid'

ChartJS.register(ArcElement, Tooltip, Legend);

function BitcoinChart() {
    const [chartData, setChartData] = useState([0, 0]);
    const [actualCryptos, setActualCryptos] = useState([]);
    const [rows, setRows] = useState([]);
    const [tableVisibility, setTableVisibility] = useState(false);
    const tradeWs = new WebSocket('wss://ws.coincap.io/trades/binance');
    const data = {
        labels: ['Buy', 'Sell'],
        datasets: [
            {
                label: 'Buy vs Sell',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
    useEffect(() => {
        const cryptosList = [];
        const rowsData = [];
        const chartData = [0, 0]; //0 => buy, 1 => sell
        tradeWs.onmessage = function (msg) {
            const receivedData = JSON.parse(msg.data);
            let cryptoIndex = cryptosList.findIndex(c => c.base == receivedData.base);
            rowsData.push(receivedData);
            if (receivedData.direction === 'buy') {
                chartData[0]++;
            } else {
                chartData[1]++;
            }
            if (cryptoIndex != -1) {
                cryptosList[cryptoIndex].counter++;
            } else {
                cryptosList.push({
                    base: receivedData.base,
                    counter: 1
                });
            };
            console.log(receivedData)
            cryptosList.sort((a, b) => b.counter - a.counter)
            setActualCryptos([...cryptosList]);
            setChartData([...chartData]);
            setRows([...rowsData]);
        }
        setTimeout(() => {
            tradeWs.close();
            setTableVisibility(true);
        }, 10000);
    }, []);

    const Chart = (props) => {
        return (
            <div className="classBox">
                <div className="chart" style={{ width: `${props.c.counter / actualCryptos[0].counter * 100}%` }}>{props.c.counter}</div>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="titleBox">
                <h1>Crypto Trends</h1>
                <h2 className="subtitle">Le cripto più scambiate in tempo reale su Binance</h2>
            </div>
            <div className="flexbox">
                <div className="chartBox">
                    <Pie data={data} />
                </div>
                <div className="cryptosList">
                    {actualCryptos.map((c, idx) => <div className="crypto" key={idx}><div className="chartLabel">{c.base.toUpperCase()} </div><Chart c={c} idx={idx} /></div>)}
                </div>
            </div>
            { tableVisibility == true ? <DataGrid rows={rows}/> : null}
        </div>
    );
}

export default BitcoinChart;
