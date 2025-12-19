import type { FC, ReactNode } from 'react'
import { HomePage } from './pages/Home'
import { LancaPage } from './pages/Lanca'
import { Header } from './components/header/Header'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from './reducer/modal/modalProvider'
import { ModalManager } from './components/common/ModalManager/ModalManager'
import { Footer } from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { links } from './configuration/links'
import { OverviewPage } from './pages/Overview'
// import { DepoPage } from './pages/Depo'
import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'

type AppProvidersProps = {
	children?: ReactNode
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
	return (
		<HelmetProvider>
			<ModalProvider>
				<ModalManager />
				{children}
			</ModalProvider>
		</HelmetProvider>
	)
}

function App() {
	return (
		<AppProviders>
			<Header />
			<Routes>
				<Route path={links.home} element={<HomePage />} />
				<Route path={links.overview} element={<OverviewPage />} />
				<Route path={links.lanca} element={<LancaPage />} />
				{/* <Route path={links.depo} element={<DepoPage />} /> */}
			</Routes>
			<Footer />
		</AppProviders>
	)
}

export default App
