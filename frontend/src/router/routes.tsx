import { RouteProps } from 'react-router-dom'
import PAGES from '../utils/constants/pages'
import Home from '../pages/Home'
import CareerPath from '../pages/CareerPath'
import TopicSelection from '../pages/TopicSelection'
import TopicContent from '../pages/TopicContent'
import CareerPrompt from '../pages/CareerPrompt'

export interface RouteConfig extends Omit<RouteProps, 'component'> {
	requireAuth?: boolean
	footerEnabled?: boolean
	component: JSX.Element
}

export const routes: RouteConfig[] = [
	{
		component: <Home />,
		path: PAGES.home,
		requireAuth: false,
		footerEnabled: true
	},
	{
		component: <CareerPrompt />,
		path: PAGES.careerPrompt,
		requireAuth: false,
		footerEnabled: true
	},
	{
		component: <TopicSelection />,
		path: PAGES.topicSelection,
		requireAuth: false,
		footerEnabled: true
	},
	{
		component: <CareerPath />,
		path: PAGES.careerPath,
		requireAuth: false,
		footerEnabled: true
	},
	{
		component: <TopicContent />,
		path: PAGES.topicContent,
		requireAuth: false,
		footerEnabled: true
	}
]
