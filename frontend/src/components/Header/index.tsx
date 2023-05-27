import React from 'react'
import IMAGES from '../../utils/constants/images'

const Header: React.FC = () => {

    return(
        <header className="header">
            <div className="content">
                <div className="left-side">
                    <img src={IMAGES.logoWithTitle} />
                </div>
                <div className="right-side">

                </div>
            </div>
        </header>
    )
}

export default Header;