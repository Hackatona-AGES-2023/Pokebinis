import React from 'react'
import './index.scss'
import Input from '../../components/Input'

const Prompt: React.FC = () => {
	return (
		<div className='carrer-prompt-container'>
			<div className='content'>
				<h1 className='title'>Inicie aqui sua trilha</h1>
				<p className='description'>Digite a área desejada para a criação da trilha</p>
				<Input label='Profissão' required={false} className='input' />
			</div>
		</div>
	)
}

export default Prompt
