import React from 'react'
import './index.scss'
import Input from '../../components/Input'

const Prompt: React.FC = () => {
	return <div className='prompt-container'>
		<header className="header">
			<div className="header-content">
				<h1>teste</h1>
			</div>
		</header>
		<div className='content'>
			<h1 className="title">Qual sua carreira</h1>
			<Input
				label="Email de Acesso"
				required={true}
				className="input"
			/>
		</div>
	</div>
}

export default Prompt
