import React from 'react';
import './Table.css';


class Table extends React.PureComponent{


    render(){
        console.log("table render");
        let contentRows = this.props.data.map((row,ind)=>{
                return (
                    <TableRow
                        date = {row.date}
                        values={row.vals}
                        key={ind}

                    />
                )
        })

        let headerRow = this.props.headerData.vals.map((el,ind)=>{
            return(
                <th className = "table__title" key={ind}>{el}</th>
            )
        })

        if (this.props.headerData.title)
            headerRow.unshift(
                <th 
                className = "table__title"
                key = {'title'}>
                    {this.props.headerData.title}
                </th>
            )

        return(
            <div className = "table-wrap">
                <table className = "currency__table">
                    <thead>
                        <tr>
                            {headerRow}
                        </tr>
                    </thead>
                    <tbody>
                        {contentRows}
                    </tbody>
                </table>
            </div>
        )
    }
}


class TableRow extends React.PureComponent{
    render(){
        console.log('Row render')
        let cells = this.props.values.map((val,i)=>{
            return(
                <td className = "table__cell" key={i}>{val}</td>
            )
        })
        return(
            <tr>
                <td className = "table__cell">{this.props.date}</td>
                {cells}
            </tr>
        )
    }
}
export default Table;
