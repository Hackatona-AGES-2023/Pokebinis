import React, { useState } from 'react'
import './index.scss'
import Input from '../../components/Input'

const TopicContent: React.FC = () => {
	const [topicName, setTopicName] = useState('Arquitetura Backend');
	const [mediaUrl, setMediaUrl] = useState('https://www.youtube.com/watch?v=AmOhy6-mUdY&pp=ygUWMTBoIHRyYXZpcyBzY290dCBib29zdA%3D%3D');
	const [topicText, setTopicText] = useState('KJASDSJHDFJADJAJHDGSHAGDJAGJDGSHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');

	return <div className='topic-content-container'>
		<h1 className="topic-name">{topicName}</h1>
		<div className="topic-content">
			<div className="topic-text">
				<h2>Descrição</h2>
				<p>{topicText}</p>
			</div>
			<div className="topic-url">
				<h2>Video complementar</h2>
				<a href={mediaUrl}>{mediaUrl}</a>
			</div>
		</div>
	</div>
}

export default TopicContent
