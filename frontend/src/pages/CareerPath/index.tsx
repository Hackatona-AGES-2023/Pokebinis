import React, { useEffect } from 'react'
import './index.scss'
import { usePrompt } from '../../providers/Prompt/PromptProvider'
import { useNavigate } from 'react-router'
import PAGES from '../../utils/constants/pages'

const CareerPath: React.FC = () => {

	const navigate = useNavigate()
	const { carrer, selectedTopics } = usePrompt()

	const onTopicClick = (topic:string) => {
		navigate(PAGES.topicContent(topic))
	}

	return <div className='career-path-container'>
		<div className='content'>
			<h1 className='title'>{carrer}</h1>
			<div>
				<hr className="solid" />
				{selectedTopics &&
				selectedTopics.map((topic, index) => (
					<div key={index}>
						<div className='list-item'
							onClick={() => onTopicClick(topic)}>
							<p className='description'>
								{topic}
							</p>
							{/* Icone */}
						</div>
						<hr className="solid" />
					</div>
				))}
			</div>
		</div>
	</div>
}

export default CareerPath
