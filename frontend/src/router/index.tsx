import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { routes } from './routes'
import Header from '../components/Header'

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => {
					
					const element = route.requireAuth ? (
						<ProtectedRoute {...route}>{route.component}</ProtectedRoute>
					) : (
						route.component
					)
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<>
								{
									route.headerEnabled && <Header/>
								}
									{element}
								</>
							}
						/>
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}
export default Router
