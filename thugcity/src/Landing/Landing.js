import React, { Component } from 'react';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='header'>
                    <div className='header_title'>
                        <img className='header_title_logo_img' src="/logo.png"/>
                        <div className='header_title_right_wrapper'>
                          <h1 className='header_title_h1'>THUGCITY</h1>
                        </div>
                    </div>
                    <ul className='menu'>
                            <li><a class="menu_item menu_selected">Home</a></li>
                            <li><a class="menu_item">About</a></li>
                            <li><a class="menu_item">Community</a></li>
                            <li><a class="menu_item">FAQ</a></li>
                            <li><a class="menu_item">Staking</a></li>
                            <li><a class="menu_item">Roadmap</a></li>
                    </ul>
                    <img className="header_search_icon" src="/temp-magnify-icon.PNG"/>
                    <button className='header_connect_wallet_button'><span>CONNECT WALLET</span></button>
                </div>

                <div className='landing_content'>
                    <img className='landing_city_img' src="./City.png"/>
                    <img className='landing_discord_img' src="/join-discord.png"/>
                       

                </div>
            </div>
        );
    }
}

export default Landing;