import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'
import { Home } from './pages/Home'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

function App() {
	return (
		<>
			<Header />
			<Home />
			<Footer />
		</>
	)
}

export default App
