import React, { useEffect, useState } from 'react'
import './index.scss'
import Input from '../../components/Input'
import { useParams } from 'react-router-dom'
import { useTopicContentMutation } from '../../api/core/prompt/mutations'

const TopicContent: React.FC = () => {
	const { topic } = useParams()
	const { mutate, isLoading, data } = useTopicContentMutation({ topic: topic })
	const [topicName, setTopicName] = useState('')
	const [mediaUrl, setMediaUrl] = useState('')
	const [topicText, setTopicText] = useState('')

	useEffect(() => {
		if (!data) return 
		setTopicName(data.name)
		setMediaUrl(data.content.mediaUrl)
		setTopicText(data.content.text)
	},[data])

	useEffect(() => {
		if (topic) mutate()
	},[topic])

	return (
		<div className='topic-content-container'>
			{isLoading? (
				<p className='description'>Loading...</p>
			) : (
				<>
					<h1 className='topic-name'>{topicName}</h1>
					<div className='topic-content'>
						<div className='topic-text'>
							<h2>Descrição</h2>
							<p>{topicText}</p>
						</div>
						<div className='topic-url'>
							<h2>Video complementar</h2>
							<a href={mediaUrl}>{mediaUrl}</a>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default TopicContent
