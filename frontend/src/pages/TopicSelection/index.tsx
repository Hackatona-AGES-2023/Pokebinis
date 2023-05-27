import React from 'react'
import './index.scss'
import Input from '../../components/Input'

const TopicSelection: React.FC = () => {
	return <div className='prompt-container'>
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

export default TopicSelection
