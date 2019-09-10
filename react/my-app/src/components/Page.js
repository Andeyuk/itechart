import React from 'react';
import InfoBlock from './InfoBlock'
import './Page.css';

export class Page extends React.Component{
    render(){
        let blockContent = ["Some Title", "Some Text to middle", "Some conclusion"];
        return(
            <React.Fragment>
                <div className = 'banner'>
                </div>
                <div className = 'info'>
                    <InfoBlock
                        value = {blockContent}
                    />
                    <InfoBlock
                        value = {blockContent}
                    />
                    <InfoBlock
                        value = {blockContent}
                    />
                </div>
                <div className = 'footer'>
                    footer here
                </div>
            </React.Fragment>
        )
    }
}

export default Page;