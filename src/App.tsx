import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'
import { Home } from './pages/Home'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { HelmetProvider } from 'react-helmet-async'

function App() {
	return (
		<HelmetProvider>
			<Header />
			<Home />
			<Footer />
		</HelmetProvider>
	)
}

export default App
