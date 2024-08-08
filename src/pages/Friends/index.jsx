import Avatar from '../../components/Avatar'
import FooterMenu from '../../components/blocks/FooterMenu'
import AppTitle from '../../components/UI/AppTitle'
import './Friends.scss'

const Friends = () => {
	return (
		<main className='friends wrapper'>
			<div className='friends__ava'>
				<Avatar />
			</div>
			<AppTitle>
				Invite friends
				<br />
				and earn points
			</AppTitle>
			<div className='friends__bottom'>
				<div className='friends-steps'>
					<div className='friends-steps__left'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='8'
							height='147'
							viewBox='0 0 8 147'
							fill='none'
						>
							<line
								x1='4'
								y1='4.5'
								x2='4.00001'
								y2='139.5'
								stroke='#03061A'
								strokeWidth='2'
							/>
							<circle
								cx='4'
								cy='4.5'
								r='3'
								fill='white'
								stroke='#03061A'
								strokeWidth='2'
							/>
							<circle
								cx='4'
								cy='142.5'
								r='3'
								fill='white'
								stroke='#03061A'
								strokeWidth='2'
							/>
							<circle
								cx='4'
								cy='73.5'
								r='3'
								fill='white'
								stroke='#03061A'
								strokeWidth='2'
							/>
						</svg>
					</div>
					<div className='friends-steps__right'>
						<div className='friends-steps__right-item'>
							<h4>Share your invitation link</h4>
							<p>Get a 🎟 play pass for each friend</p>
						</div>
						<div className='friends-steps__right-item'>
							<h4>Your friends join Blum</h4>
							<p>And start farming points</p>
						</div>
						<div className='friends-steps__right-item'>
							<h4>Score 10% from buddies</h4>
							<p>Plus an extra 2.5% from their referrals</p>
						</div>
					</div>
				</div>
				<button className='friends__button'>Invite a fren (10 left)</button>
				<FooterMenu />
			</div>
		</main>
	)
}
export default Friends
