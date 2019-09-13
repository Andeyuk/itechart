import React from 'react';
import Table from './Table'
import CurrencyAPI from '../modules/CurrencyAPI'
import ToolBar from './ToolBar'
import './CurrencyApp.css';


class CurrencyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contentData: [
            ],
            headerData: {
                title: 'Дата',
                vals: []
            },
            currencies: [],
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onCurrencyClick = this.onCurrencyClick.bind(this)
    }

    componentDidMount(){
        CurrencyAPI.getSomeCurrencies().then(el=>{
            this.setState({
                currencies: el
            })
        })
    }

    onSubmit(data){

        let promiseList = data.currencyIDs.map(id=>
            CurrencyAPI.getDynamicRates(
                id,
                data.dateFrom,
                data.dateTo
            )
        )
        
        Promise.all(promiseList).then((el)=>{
            let dataContentRows = el[0].map((arr, i)=>dataToRow(el, i, "Cur_OfficialRate"));

            this.setState({
                contentData: dataContentRows,
            })
        })
    } 

    onCurrencyClick(currency){
        let currencyNames = Object.assign({}, this.state.headerData);
        currencyNames.vals.push(currency);
        this.setState({
            headerData: currencyNames
        })
        /*this.refs.display.setState({
            currency: cur
        })*/
    }

    render(){
        console.log("app rendered")
        return(
            <div className = "currency">
                <ToolBar 
                    currencies = {this.state.currencies}
                    onSubmit = {this.onSubmit}
                    onCurrencyClick = {this.onCurrencyClick}
                />
                <div className = "display-wrapper">
                    <ChosenCurrencies 
                    ref='display' 
                    id="chosenCurrency"
                    currenciesNames = {this.state.headerData.vals}
                    />    
                    <Table 
                        headerData = {this.state.headerData}
                        data = {this.state.contentData}
                    />
                </div>
            </div>
        )
    }
}

export default CurrencyApp;


class ChosenCurrencies extends React.Component{
    render(){

        let currencyArr = this.props.currenciesNames.map((el,ind)=>{
            return(
                <div key={ind}>{el}</div>
            )
        })
        return(
            <div className="currency__chosen-block">
                <p>Выбранная валюта</p>
                {currencyArr}
            </div>
        )
    }
}

function dataToRow(data, rowInd, prop){
    let newData = {}
    newData.date = data[0][rowInd]['Date'];
    newData.vals = data.map((arr)=>{
        let value = arr[rowInd][prop];
        return value 
    })
    return newData;
}