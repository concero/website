import type { FC } from 'react'
import "./Hero.pcss"

export const Hero: FC = (): JSX.Element => {
	return (
		<section className="hero">
			<div className='hero_content'>
				<div className='hero_description'>
					<div className='hero_title_container'>
						<span className='hero_title'>Interoperability solution that is <span className='concero_color'>scalable</span></span>
					</div>
					<span className='hero_subtitle'>Go anywhere with Concero today</span>
				</div>
			</div>		
		</section>
	)
}
