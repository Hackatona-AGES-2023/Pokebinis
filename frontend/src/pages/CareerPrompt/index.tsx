import React, { useEffect, useState } from 'react'
import './index.scss'
import Input from '../../components/Input'
import { useCarrerPromptMutation } from '../../api/core/prompt/mutations'
import Button from '../../components/Button'

const Prompt: React.FC = () => {
	const [carrer, setCarrer] = useState<string>('')
	const { mutate, isLoading, data } = useCarrerPromptMutation({ carrer })

	useEffect(() => {
		console.log(data)
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
							value={carrer}
							onChange={(e) => setCarrer(e.target.value)}
						/>

						<Button onClick={mutate}>Confirmar</Button>
					</>
				)}
			</div>
		</div>
	)
}

export default Prompt
