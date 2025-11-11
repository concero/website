import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'
import { HomePage } from './pages/Home'
import { Header } from './components/header/Header'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from './reducer/modal/modalProvider'
import { ModalManager } from './components/common/ModalManager/ModalManager'

function App() {
	return (
		<HelmetProvider>
			<ModalProvider>
				<ModalManager />
				<Header />
				<HomePage />
			</ModalProvider>
		</HelmetProvider>
	)
}

export default App
