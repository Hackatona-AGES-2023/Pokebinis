import React, { useEffect, useState } from 'react'
import './index.scss'
import { usePrompt } from '../../providers/Prompt/PromptProvider'
import { useNavigate } from 'react-router'
import PAGES from '../../utils/constants/pages'

const TopicSelection: React.FC = () => {
	const navigate = useNavigate()
	const { carrer, topics } = usePrompt()

	useEffect(() => {
		if (!carrer) navigate(PAGES.careerPrompt)
	}, [carrer])

	return (
		<div className='topic-selection-container'>
			<div className='content'>
				<h1 className='title'>{carrer}</h1>
			</div>
		</div>
	)
}

export default TopicSelection
