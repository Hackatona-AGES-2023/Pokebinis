import React, { useEffect } from 'react'
import './index.scss'
import { usePrompt } from '../../providers/Prompt/PromptProvider'
import { useNavigate } from 'react-router'
import PAGES from '../../utils/constants/pages'
import CheckBox from '../../components/CheckBox'

const TopicSelection: React.FC = () => {
	const navigate = useNavigate()
	const { carrer, topics, selectedTopics, setSelectedTopics } = usePrompt()

	useEffect(() => {
		if (!carrer) navigate(PAGES.careerPrompt)
	}, [carrer])

	const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setSelectedTopics?.([...selectedTopics, e.target.value])
		else {
			let old = [...selectedTopics]
			old = old.filter((s) => s !== e.target.value)
			setSelectedTopics?.(old)
		}
	}

	return (
		<div className='topic-selection-container'>
			<div className='content'>
				<h1 className='title'>{carrer}</h1>
				<p className='description'>Selecione os tópicos desejados para estudar na sua trilha:</p>
				<div className='topic-list'>
					{topics &&
						topics.map((topic, index) => (
							<div key={index}>
								<CheckBox
									label={topic}
									value={topic}
									checked={selectedTopics?.includes(topic)}
									onChange={onCheckBoxChange}
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default TopicSelection
