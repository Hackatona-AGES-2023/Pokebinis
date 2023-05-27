import React from 'react'
import IMAGES from '../../utils/constants/images'
import PAGES from '../../utils/constants/pages'
import { Link } from 'react-router-dom'
import './index.scss'

const Header: React.FC = () => {

    return(
        <header className="header">
            <div className="content">
                <Link to={PAGES.careerPrompt}>
                    <img className="logo-svg" src={IMAGES.logoWithTitle} />
                </Link>
            </div>
        </header>
    )
}

export default Header;