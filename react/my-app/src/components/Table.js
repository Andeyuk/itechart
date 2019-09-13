import React from 'react';
import './Table.css';


class Table extends React.Component{


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
                <th className = "table__title" key={ind}>
                    {el}
                    <svg
                        className="table__rm-btn"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="times"
                        role="img"
                        viewBox="0 0 352 512"

                        onClick = {this.props.onRemoveCurrency}
                    >
                        <path
                            d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z"
                        />
                    </svg>
                </th>
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


class TableRow extends React.Component{
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
