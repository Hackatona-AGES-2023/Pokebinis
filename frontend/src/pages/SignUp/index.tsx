import React from 'react'
import './index.scss'
import IMAGES from '../../utils/constants/images'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp: React.FC = () => {
	return (
		<div className='signUp-container'>
			<div className='content'>
				<img src={IMAGES.logoWithTitle} />
				<h1 className='title'>Cadastre-se</h1>
				<Input label='E-mail' required={false} className='input' />
				<Input label='Nome' required={false} className='input' />
				<Button>Cadastrar-se</Button>
			</div>
		</div>
	)
}

export default SignUp
