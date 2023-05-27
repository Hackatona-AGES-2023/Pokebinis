import React from 'react'
import './index.scss'
import Input from '../../components/Input'

const Prompt: React.FC = () => {
	return <div className='prompt-container'>
		<header className="header">
			<div className="header-content">
				
			</div>
		</header>
		<div className='content'>
			<h1 className="title">Qual sua carreira</h1>
			<Input
				label="Profissão"
				required={false}
				className="input"
			/>
		</div>
	</div>
}

export default Prompt
