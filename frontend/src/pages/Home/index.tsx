import React from 'react'
import Input from '../../components/Input'
import './index.scss'
import Button from '../../components/Button'
import IMAGES from '../../utils/constants/images'
import PAGES from '../../utils/constants/pages'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className='home-container'>
			<div className='content'>
				<img src={IMAGES.logoWithTitle} />
				<h1 className='title'>Entrar</h1>
				<Input label='E-mail' required={false} className='input' />
				<Button onClick={() => navigate(PAGES.careerPrompt)}>Entrar</Button>
				<Button type='secondary' onClick={() => navigate(PAGES.signUp)}>Cadastre-se</Button>
			</div>
		</div>
	)
}

export default Home
