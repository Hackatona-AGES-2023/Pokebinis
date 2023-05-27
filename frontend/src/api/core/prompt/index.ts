import { coreApi } from '..'
import { createHttpClient } from '../../http-client'

export const promptApi = createHttpClient('/prompts', coreApi)
