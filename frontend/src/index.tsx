import './sass/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Router from './router'
import { queryClient } from './api/query-client'
import { QueryClientProvider } from 'react-query'
import { PromptProvider } from './providers/Prompt/PromptProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<PromptProvider>
				<Router />
			</PromptProvider>
		</QueryClientProvider>
	</React.StrictMode>
)

//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
