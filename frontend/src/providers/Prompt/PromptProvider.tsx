import React, { createContext, ReactNode, useContext, useState } from 'react'

interface PromptProviderProps {
	carrer?: string
	setCarrer: ((carrer: string) => void) | null
	topics?: string[]
	setTopics: ((topics: string[]) => void) | null
	selectedTopics: string[]
	setSelectedTopics: ((topics: string[]) => void) | null
}

const PromptContext = createContext<PromptProviderProps>({
	setCarrer: null,
	setTopics: null,
	selectedTopics: [],
	setSelectedTopics: null
})

const PromptProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
	const [carrer, setCarrer] = useState<string>()
	const [topics, setTopics] = useState<string[]>()
	const [selectedTopics, setSelectedTopics] = useState<string[]>([])

	const value = {
		carrer,
		setCarrer,
		topics,
		setTopics,
		selectedTopics,
		setSelectedTopics
	}

	return <PromptContext.Provider value={value}>{children}</PromptContext.Provider>
}

export { PromptProvider }

export function usePrompt() {
	return useContext(PromptContext)
}
