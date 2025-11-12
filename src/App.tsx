import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'
import { HomePage } from './pages/Home'
import { Header } from './components/header/Header'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from './reducer/modal/modalProvider'
import { ModalManager } from './components/common/ModalManager/ModalManager'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<HelmetProvider>
			<ModalProvider>
				<ModalManager />
				<Header />
				<HomePage />
				<Footer />
			</ModalProvider>
		</HelmetProvider>
	)
}

export default App
