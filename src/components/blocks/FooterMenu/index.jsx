import { NavLink } from 'react-router-dom'
import './FooterMenu.scss'
import FriendsSvg from './svg/FriendsSvg'
import HomeSvg from './svg/HomeSvg'
import TasksSvg from './svg/TasksSvg'

const FooterMenu = () => {
	return (
		<div className='footer-menu'>
			<NavLink
				to={'/home'}
				className='footer-menu__link footer-menu__link-home'
			>
				<HomeSvg />
				Home
			</NavLink>
			<NavLink to={'/tasks'} className='footer-menu__link'>
				<TasksSvg />
				Tasks
			</NavLink>
			<NavLink to={'/friends'} className='footer-menu__link'>
				<FriendsSvg />
				Friends
			</NavLink>
		</div>
	)
}

export default FooterMenu
