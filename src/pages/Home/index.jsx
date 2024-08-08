import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import FooterMenu from '../../components/blocks/FooterMenu'
import './Home.scss'
import HomeFarming from './HomeFarming'
import HomeSvgMoney from './HomeSvgMoney'

const Home = () => {
	return (
		<main className='home wrapper'>
			<div className='home__ava'>
				<Avatar />
			</div>
			<div className='home-value'>
				<HomeSvgMoney />
				15,710.200
			</div>
			<div className='home__code'>strxssxd</div>
			<div className='home-bottom'>
				<div className='home-game'>
					<div className='home-game__bottom'>
						<div className='home-game__bottom-left'>
							<h6>Drop game</h6>
							<p>🎟 172</p>
						</div>
						<Link to={'/game'} className='home-game__bottom-right'>
							Play
						</Link>
					</div>
				</div>
				<div className='home-farming'>
					<button className='home-farming__button app-link'>
						Farming <HomeFarming /> 0.331
					</button>
				</div>
			</div>
			<FooterMenu />
		</main>
	)
}
export default Home
