import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_description'>
                    <div className='footer_description_title'>
                        <img className='footer_description_title_logo_img' src="/logo.PNG"/>
                        <div className='footer_description_title_right_wrapper'>
                            <h1 className='footer_description_title_h1'>THUGCITY</h1>
                            <h1 className='footer_description_title_subtext_h1'>WEB3 Elevation Labs</h1>
                        </div>
                    </div>
                    <div className='footer_description_text'>
                        <p className='footer_description_text_p'>Digital marketplace for crypto collectibles and non-fungible tokens(NFTS). Buy, sell and discover exclusive digital assests.</p>
                    </div>
                </div>
                <div className='footer_links'>
                    <div className='footer_links_list'>
                        <h1>Marketplace</h1>
                        <ul>
                            <li>All NFTs</li>
                            <li>New</li>
                            <li>Trending</li>
                        </ul>
                    </div>
                    <div className='footer_links_list'>
                        <h1>Company</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className='footer_links_list'>
                        <h1>Support</h1>
                        <ul>
                            <li>Help Center</li>
                            <li>Terms Of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className='footer_contact'>
                    <h1 className='footer_contact_title'>Stay up to date</h1>
                    <div className='footer_contact_input_wrapper'>
                        <input className='footer_contact_input' placeholder='Your email address' type='text'></input>
                        <button className='footer_contact_input_submit'>
                            <img className='footer_contact_input_submit_icon' src="/temp-arrow-icon.PNG"/>
                        </button>
                    </div>
                </div>
                <div className='footer_media'>
                    <h1 className='footer_media_title'>Follow Us</h1>
                    <div className='footer_media_bottom_wrapper'>
                        <img className='footer_media_icon' src="/insta-logo.PNG"/>
                        <img className='footer_media_icon' src="/facebook-logo.PNG"/>
                        <img className='footer_media_icon' src="/twitter-logo.PNG"/>
                        <img className='footer_media_icon' src="/youtube-logo.PNG"/>
                        <div className='footer_media_divider'></div>
                        <p className='footer_media_description'>Copyright © 2022 THUGCITY. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;