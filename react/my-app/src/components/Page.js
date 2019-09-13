import React from 'react';
import CurrencyApp from './CurrencyApp'
import './Page.css';

class Page extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'banner'>
                </div>
                <CurrencyApp />
                <div className = 'footer'>
                    footer here
                </div>
            </React.Fragment>
        )
    }
}

export default Page;