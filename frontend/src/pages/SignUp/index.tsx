import React from 'react'
import './index.scss'
import IMAGES from '../../utils/constants/images'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import PAGES from '../../utils/constants/pages'

const SignUp: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className='signUp-container'>
			<div className='content'>
				<img src={IMAGES.logoWithTitle} />
				<h1 className='title'>Cadastre-se</h1>
				<Input label='E-mail' required={false} className='input' />
				<Input label='Nome' required={false} className='input' />
				<Button onClick={() => navigate(PAGES.careerPrompt)}>Cadastrar-se</Button>
			</div>
		</div>
	)
}

export default SignUp
