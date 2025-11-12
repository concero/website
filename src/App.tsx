import type { FC, ReactNode } from 'react'
import { HomePage } from './pages/Home'
import { Header } from './components/header/Header'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from './reducer/modal/modalProvider'
import { ModalManager } from './components/common/ModalManager/ModalManager'
import { Footer } from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { links } from './configuration/links'
import { OverviewPage } from './pages/Overview'
import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'

type AppProvidersProps = {
	children?: ReactNode
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
	return (
		<HelmetProvider>
			<ModalProvider>{children}</ModalProvider>
		</HelmetProvider>
	)
}

function App() {
	return (
		<AppProviders>
			<ModalManager />
			<Header />
			<Routes>
				<Route path={links.home} element={<HomePage />} />
				<Route path={links.overview} element={<OverviewPage/>} />
			</Routes>
			<Footer />
		</AppProviders>
	)
}

export default App
