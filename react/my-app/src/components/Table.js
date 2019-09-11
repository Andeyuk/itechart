import React from 'react';
import './Table.css';


class Table extends React.Component{
    renderRow(date, ...values){
        //key is index temporary
        let cells = values.map((val,i)=>{
            return(
                <td className = "table__cell" key={i}>{val}</td>
            )
        })
        return(
            <tr>
                <td className = "table__cell">{date}</td>
                {cells}
            </tr>
        )
    }
    render(){
        let contentRows = this.props.data.map((row,ind)=>{
            return (
                <React.Fragment key={ind}>
                    {this.renderRow(row.date, ...row.values)}
                </React.Fragment>
            )
        })

        let headerRow = this.props.headerData.values.map(el=>{
            return(
                <th className = "table__title">{el}</th>
            )
        })
        return(
            <table className = "currency__table">
                <thead>
                    <tr>
                        <th className = "table__title">
                            Дата
                        </th>
                        {headerRow}
                    </tr>
                </thead>
                <tbody>
                    {contentRows}
                </tbody>
            </table>
        )
    }
}

export default Table;
