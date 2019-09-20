import React from 'react';
//import  history  from '../history/history';
import SlideBlock from '../containers/SlideBlock'
import './Main.css';



let text = `Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men. 

Full he none no side. Uncommonly surrounded considered for him are its. It we is read good soon. My to considered delightful invitation announcing of no decisively boisterous. Did add dashwoods deficient man concluded additions resources. Or landlord packages overcame distance smallest in recurred. Wrong maids or be asked no on enjoy. Household few sometimes out attending described. Lain just fact four of am meet high. 
`;
class Main extends React.Component{
    render(){
        console.log('main rendered')
        return(
            <div className = "main">
                <div className = "main__content">
                    <SlideBlock/>
                    <div className = "intro">
                        <h2 className = "intro__title">Title</h2>
                        <div className = "intro__text-wrap">
                            <p className = "intro__text">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;