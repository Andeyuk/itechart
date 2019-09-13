import React from 'react';
import Table from './Table'
import CurrencyAPI from '../modules/CurrencyAPI'
import ToolBar from './ToolBar'
import './CurrencyApp.css';


class CurrencyApp extends React.PureComponent{
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
        this.onCurrencyClick = this.onCurrencyClick.bind(this);
        this.onRemoveCurrency = this.onRemoveCurrency.bind(this);
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
    }

    onRemoveCurrency(event){
        let currencyNames = Object.assign({}, this.state.headerData);
        let toRemove = event.target.closest('.table__title').textContent;
        let ind = currencyNames.vals.findIndex(val=>
            val === toRemove
        )

        currencyNames.vals.splice(ind, 1);

        if (this.state.contentData.length){


            if (this.state.contentData[0].vals.length == 1){
                this.setState({
                    headerData: currencyNames,
                    contentData: []
                })
                return;
            }

            let contentData = this.state.contentData.map(el=>el);
            contentData.forEach(obj=>
                obj.vals.splice(ind, 1)
            );

            this.setState({
                headerData: currencyNames,
                contentData: contentData
            })

        } else {

            this.setState({
                headerData: currencyNames
            })
        }

        this.refs.toolBar.removeCurrency(toRemove);
    }

    render(){
        console.log("app rendered")

        return(
            <div className = "currency">
                <ToolBar 
                    ref = 'toolBar'
                    currencies = {this.state.currencies}
                    onSubmit = {this.onSubmit}
                    onCurrencyClick = {this.onCurrencyClick}
                /> 
                <Table 
                    headerData = {this.state.headerData}
                    data = {this.state.contentData}
                    onRemoveCurrency = {this.onRemoveCurrency}
                />
            </div>
        )
    }
}

export default CurrencyApp;


function dataToRow(data, rowInd, prop){
    let newData = {}
    newData.date = data[0][rowInd]['Date'];
    newData.vals = data.map((arr)=>{
        let value = arr[rowInd][prop];
        return value 
    })
    return newData;
}