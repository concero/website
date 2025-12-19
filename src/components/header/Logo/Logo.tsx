import './Logo.pcss'

export const Logo = () => {
	const handleClick = () => {
		window.location.href = '/'
	}
	return (
		<div className="logo_container" onClick={handleClick}>
			<img src="/Header/Concero.svg" alt="Concero" />
		</div>
	)
}
