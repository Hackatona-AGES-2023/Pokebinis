export interface CarrerPromptCreate {
	carrer: string
}

export interface TopicsResponse {
	topics: string[]
}

export interface TopicNameCreate {
	topic?: string
}

export interface TopicContent {
	name: string,
	content: {
		text: string,
		mediaUrl: string
	}
}