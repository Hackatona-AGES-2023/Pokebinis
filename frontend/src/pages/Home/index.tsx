import React from 'react'
import Input from '../../components/Input'
import './index.scss'
import IMAGES from '../../utils/constants/images'

const Home: React.FC = () => {
	return (
		<div className='home-container'>
			<div className='content'>
				<img src={IMAGES.logoWithTitle} />
				<h1 className='title'>Entrar</h1>
				<Input label='E-mail' required={false} className='input' />
			</div>
		</div>
	)
}

export default Home
