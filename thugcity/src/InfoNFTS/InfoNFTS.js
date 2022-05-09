import React, { Component } from 'react';
import './InfoNFTS.css'

class InfoNFTS extends Component {
    render() {
        return (
            <div className='info_nfts'>
                <h1 className='info_nfts_title'>
                    10,000 THUGCITY NFTS
                </h1>
                <h1 className='info_nfts_description'>
                    10,000 Unique ThugCity NfTs on the Ethereum blockchain (ERC-721).
                    There will be 9,000 Thugs vs. 1,000 Cops. Who will run the city?
                </h1>
                <div className='info_nfts_showcase_top'>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                </div>
                <div className='info_nfts_showcase_top'>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                    <img className='info_nfts_showcase_top_img' src="./thug-46.png"/>
                </div>
            </div>
        );
    }
}

export default InfoNFTS;