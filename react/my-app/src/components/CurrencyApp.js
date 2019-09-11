import React from 'react';
import Table from './Table'
import CurrencyAPI from '../modules/CurrencyAPI'
import './CurrencyApp.css';

let data =[[{"Cur_ID":145,"Date":"2019-09-02T00:00:00","Cur_OfficialRate":2.0980},{"Cur_ID":145,"Date":"2019-09-03T00:00:00","Cur_OfficialRate":2.1049},{"Cur_ID":145,"Date":"2019-09-04T00:00:00","Cur_OfficialRate":2.1190}],[{"Cur_ID":145,"Date":"2019-09-02T00:00:00","Cur_OfficialRate":2.0980},{"Cur_ID":145,"Date":"2019-09-03T00:00:00","Cur_OfficialRate":2.1049},{"Cur_ID":145,"Date":"2019-09-04T00:00:00","Cur_OfficialRate":2.1190}]];

function dataToRow(data, rowInd, prop){
    let newData = {}
    newData.date = data[0][rowInd]['Date'];
    newData.values = data.map((arr)=>{
        let value = arr[rowInd][prop];
        return value 
    })
    return newData;
}

for(let i=0; i<data[0].length;i++)
    console.log(dataToRow(data, i, "Cur_OfficialRate"))

let dataContentRows = data[0].map((arr, i)=>dataToRow(data, i, "Cur_OfficialRate"));
let dataHeaderRow = dataToRow(data, 0, "Cur_ID");

class CurrencyApp extends React.Component{
    render(){
        return(
            <Table 
                //data = {CurrencyAPI.getDynamicRates(145,2019-9-2,2019-9-4)}
                headerData = {dataHeaderRow}
                data = {dataContentRows}
            />
        )
    }
}

export default CurrencyApp;