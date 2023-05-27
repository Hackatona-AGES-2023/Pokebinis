// import { useMutation } from 'react-query'
import { promptApi } from '.'
import { useMutation } from 'react-query'
import { CarrerPromptCreate, TopicContent, TopicNameCreate, TopicsResponse } from '../../../dtos/Prompt'
import QUERY_KEYS from '../../../utils/constants/queries'
import { queryClient } from '../../query-client'

export const useCarrerPromptMutation = (payload: CarrerPromptCreate) =>
	useMutation({
		mutationFn: () => promptApi.post('/carrers', payload).then((res) => res.data as TopicsResponse),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.prompt] })
	})

export const useTopicContentMutation = (payload: TopicNameCreate) =>
	useMutation({
		mutationFn: () => promptApi.post('/topics', payload).then((res) => res.data as TopicContent),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.prompt] })
	})
