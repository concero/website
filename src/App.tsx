import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'
import { Home } from './pages/Home'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { HelmetProvider } from 'react-helmet-async'
import { ModalProvider } from './reducer/modalProvider'

function App() {
	return (
		<HelmetProvider>
			<ModalProvider>
				<Header />
				<Home />
				<Footer />
			</ModalProvider>
		</HelmetProvider>
	)
}

export default App
