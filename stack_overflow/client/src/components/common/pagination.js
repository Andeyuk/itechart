import React from 'react';
import { Menu } from "semantic-ui-react"

export default class Pagination extends React.Component {
    constructor(props){
        super(props);
        const {activeItem = 1, lastPage = 10} = props;
        this.state={
            activeItem,
            lastPage
        }
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: +name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu pagination>
            <Menu.Item
                name='1'
                active={activeItem === '1'}
                onClick={this.handleItemClick}
            />
            <Menu.Item disabled>...</Menu.Item>
            <Menu.Item
                name={lastPage - 2}
                active={activeItem === lastPage - 2}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name={lastPage - 1}
                active={activeItem === lastPage - 1}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name={lastPage}
                active={activeItem === lastPage}
                onClick={this.handleItemClick}
            />
        </Menu>
      )
    }
}
