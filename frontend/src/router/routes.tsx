import { RouteProps } from 'react-router-dom'
import PAGES from '../utils/constants/pages'
import Home from '../pages/Home'

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
	}
]
