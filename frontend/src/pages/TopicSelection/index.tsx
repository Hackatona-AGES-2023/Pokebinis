import React from 'react'
import './index.scss'
import { usePrompt } from '../../providers/Prompt/PromptProvider'

const TopicSelection: React.FC = () => {
	const { carrer, topics } = usePrompt()

	return (
		<div className='prompt-container'>
			<div className='content'>
				<h1 className='title'>{carrer}</h1>
				
			</div>
		</div>
	)
}

export default TopicSelection
