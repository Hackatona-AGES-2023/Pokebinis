import React, { useEffect } from 'react'
import './index.scss'
import { usePrompt } from '../../providers/Prompt/PromptProvider'
import { useNavigate } from 'react-router'
import PAGES from '../../utils/constants/pages'
import IMAGES from '../../utils/constants/images'

const CareerPath: React.FC = () => {

	const navigate = useNavigate()
	const { carrer, selectedTopics, setSelectedTopics } = usePrompt()

	useEffect(() => {
		if (!carrer) navigate(PAGES.careerPrompt)
	}, [carrer])

	return <div className='career-path-container'>
		<div className='content'>
			<h1 className='title'>{carrer}</h1>
			<div>
				<hr className="solid" />
				{selectedTopics &&
				selectedTopics.map((topic, index) => (
					<div key={index}>
						<div className='list-item'
							onClick={() => {null}}>
							<p className='description'>
								{topic}
							</p>
							<img 
								src={IMAGES.rightArrow}
								className='image' />
						</div>
						<hr className="solid" />
					</div>
				))}
			</div>
		</div>
	</div>
}

export default CareerPath
