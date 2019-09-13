import React from 'react'
import './ToolBar.css'


class ToolBar extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            dateFrom: null,
            dateTo: null,
            currencyIDs: [],
            currencyNames: []
        }

        this.onDateChange = this.onDateChange.bind(this);
        this.onCurrencyClick = this.onCurrencyClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValidState = this.isValidState.bind(this);
        this.removeCurrency = this.removeCurrency.bind(this);
    }

    onDateChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onCurrencyClick(event){
        let data = this.state;
        let currencyID = event.target.id;
        let currencyProp = event.target.parentElement.id;
        
        //duplication check
        if(data[currencyProp].find(id=>id === currencyID)){
            return;
        }

        data.currencyIDs.push(event.target.id) ;
        data.currencyNames.push(event.target.value);

        this.setState({
            currencyIDs: data.currencyIDs,
            currencyNames: data.currencyNames
        })

        this.props.onCurrencyClick(event.target.value);

    }

    onSubmit(){
        if (this.isValidState())
            this.props.onSubmit(this.state)
        else alert('Проверьте введнные данные');
    }

    isValidState(){
        let data = this.state;

        if (!data.dateFrom || !data.dateTo)
            return false;

        let dateFrom = new Date(data.dateFrom);
        let dateTo = new Date(data.dateTo);

        if (dateFrom.getTime() >  dateTo.getTime())
            return false

        if (!data.currencyIDs.length || !data.currencyNames.length)
            return false;
        
        return true;
    }

    removeCurrency(currencyName){
        let currencyNames = [...this.state.currencyNames];
        let currencyIDs = [...this.state.currencyIDs];
        let toRemove = currencyName;
        let ind = currencyNames.findIndex(val=>
            val === toRemove
        )

        currencyNames.splice(ind, 1);
        currencyIDs.splice(ind, 1);

        this.setState({
            currencyNames: currencyNames,
            currencyIDs: currencyIDs
        })

    }

    render(){
        console.log('toolbar rendered');

        let currencyList = this.props.currencies.map((cur)=>{
            return(
                <option 
                    key = {cur.Cur_ID} 
                    id = {cur.Cur_ID}
                    onClick = {this.onCurrencyClick}
                >{cur.Cur_Abbreviation}</option>
            )
        })

        return(
            <div className="currency__toolbar">
                 <div>
                    <p>С какого числа</p>
                    <input type="date"
                        id="dateFrom"
                        onChange = {this.onDateChange}
                    />
                </div>

                <div>
                    <p>По какое число</p>
                    <input type="date"
                        id="dateTo" 
                        onChange = {this.onDateChange}
                    />
                </div>

                <div>
                    <p>выберите валюту</p>
                    <select 
                        className="currency__select-items"
                        id="currencyIDs"
                        multiple="multiple"
                    >
                        {currencyList}
                    </select>
                </div>

                <div>
                    <p>Отобразить</p>
                    <button 
                        id="currency__submit"
                        onClick = {this.onSubmit}
                    >
                        OK
                    </button>
                </div>
            </div>
        )
    }
}

export default ToolBar;