import React, { Component } from 'react';
import './InfoNews.css'

class InfoNews extends Component {
    render() {
        return (
            <div className='info_news'>
                <p className='info_news_title'>THE LATEST NEWS</p>
                <p className='info_news'></p>
            </div>
        );
    }
}

export default InfoNews;