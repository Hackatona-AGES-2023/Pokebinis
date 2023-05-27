import React, { useEffect, useState } from 'react'
import './index.scss'
import Input from '../../components/Input'
import { useCarrerPromptMutation } from '../../api/core/prompt/mutations'
import Button from '../../components/Button'
import { usePrompt } from '../../providers/Prompt/PromptProvider'
import { useNavigate } from 'react-router'
import PAGES from '../../utils/constants/pages'

const Prompt: React.FC = () => {
	const navigate = useNavigate()
	const [carrerInput, setCarrerInput] = useState<string>('')
	const { mutate, isLoading, data } = useCarrerPromptMutation({ carrer: carrerInput })
	const { setCarrer, setTopics, setSelectedTopics } = usePrompt()

	useEffect(() => {
		if (carrerInput && data) {
			setCarrer?.(carrerInput)
			setTopics?.(data.topics)
			setSelectedTopics?.(data.topics)
			navigate(PAGES.topicSelection)
		}
	}, [data])

	return (
		<div className='carrer-prompt-container'>
			<div className='content'>
				<h1 className='title'>Inicie aqui sua trilha</h1>
				{isLoading ? (
					<p className='description'>Loading...</p>
				) : (
					<>
						<p className='description'>Digite a área desejada para a criação da trilha</p>
						<Input
							label='Profissão'
							required={false}
							className='input'
							value={carrerInput}
							onChange={(e) => setCarrerInput(e.target.value)}
						/>

						<Button onClick={mutate}>Confirmar</Button>
					</>
				)}
			</div>
		</div>
	)
}

export default Prompt
