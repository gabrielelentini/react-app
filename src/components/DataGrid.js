import DataGrid from 'react-data-grid';

const columns = [
  { key: 'base', name: 'Base' },
  { key: 'direction', name: 'Direction' },
  { key: 'exchange', name: 'Exchange' },
  { key: 'price', name: 'Price' },
  { key: 'priceUsd', name: 'Price USD' },
  { key: 'quote', name: 'Quote' },
  { key: 'timestamp', name: 'Timestamp' },
  { key: 'volume', name: 'Volume' }
];


function DataTable(props) {
  console.log(props)
  return (
        <DataGrid columns={columns} rows={props.rows} />
  )
}

export default DataTable;