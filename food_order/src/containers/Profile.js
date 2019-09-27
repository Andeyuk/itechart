import React from 'react';
import { connect } from 'react-redux';

import './Profile.css';

class Profile extends React.Component{
    render(){
        return(
            <div className = "profile-wrap">
                <div className = "profile">
                    <div className = "profile__info info">
                        <div className = "info__item">
                            <div className = "info__title">Username:</div>
                            <div className = "info__content">
                                @Username
                            </div>
                        </div>
                        <div className = "info__item">
                            <div className = "info__title">Email:</div>
                            <div className = "info__content">
                                email@mail.com
                            </div>
                        </div>
                    </div>
                    <div className = "profile__history history">
                        <div className = "history__title">History</div>
                        <div className = "history__item">
                            <div className = "history__row">
                                <div className = "history__date">Date</div>
                                <div className = "history__spend">@spend</div>
                            </div>
                            <ul className = "history__bill">
                                <li className = "history__dish">
                                    <p>Lorem</p>
                                    <p>@Price</p>
                                </li>
                                <li className = "history__dish">
                                    <p>Lorem</p>
                                    <p>@Price</p>
                                </li>
                                <li className = "history__dish">
                                    <p>Lorem</p>
                                    <p>@Price</p>
                                </li>
                                <p>total price</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;