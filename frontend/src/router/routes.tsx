import { RouteProps } from 'react-router-dom'
import PAGES from '../utils/constants/pages'
import Home from '../pages/Home'
import CareerPath from '../pages/CareerPath'
import TopicSelection from '../pages/TopicSelection'
import TopicContent from '../pages/TopicContent'
import CareerPrompt from '../pages/CareerPrompt'
import SignUp from '../pages/SignUp'

export interface RouteConfig extends Omit<RouteProps, 'component'> {
	requireAuth?: boolean
	headerEnabled?: boolean
	component: JSX.Element
}

export const routes: RouteConfig[] = [
	{
		component: <Home />,
		path: PAGES.home,
		requireAuth: false,
		headerEnabled: false
	},
	{
		component: <SignUp />,
		path: PAGES.signUp,
		requireAuth: false,
		headerEnabled: false
	},
	{
		component: <CareerPrompt />,
		path: PAGES.careerPrompt,
		requireAuth: false,
		headerEnabled: true
	},
	{
		component: <TopicSelection />,
		path: PAGES.topicSelection,
		requireAuth: false,
		headerEnabled: true
	},
	{
		component: <CareerPath />,
		path: PAGES.careerPath,
		requireAuth: false,
		headerEnabled: true
	},
	{
		component: <TopicContent />,
		path: PAGES.topicContent,
		requireAuth: false,
		headerEnabled: true
	}
]
