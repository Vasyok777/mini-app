import { useEffect, useState } from 'react'
import Avatar from '../../components/Avatar'
import FooterMenu from '../../components/blocks/FooterMenu'
import AppTitle from '../../components/UI/AppTitle'
import { getUserTasks } from './serverActions' // Імпорт server action

import './Tasks.scss'

const Tasks = () => {
	const [tasks, setTasks] = useState([])
	const [error, setError] = useState(null)
	const [user, setUser] = useState(null)

	useEffect(() => {
		const tg = window.Telegram.WebApp
		const initDataUnsafe = tg.initDataUnsafe
		const user = initDataUnsafe.user
		// Зберігання користувача
		setUser(user)

		// Виклик server action
		getUserTasks(342)
			.then(tasks => {
				console.log('task', tasks)
				setTasks(tasks)
			})
			.catch(err => {
				console.error('Error fetching tasks:', err)
				setError(err)
			})
	}, [])

	return (
		<main className='tasks wrapper'>
			<div className='tasks__ava'>
				<Avatar />
			</div>
			<AppTitle>
				{tasks.length} tasks available {user && user.username}
			</AppTitle>
			<p className='tasks__text'>
				We’ll reward you immediately with points after each task completion
			</p>
			<div className='tasks-box'>
				{tasks.map(task => (
					<div key={task.id} className='tasks-box__item'>
						<div className='tasks-box__item-flex'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='25'
								viewBox='0 0 24 25'
								fill='none'
							>
								<path
									d='M1.7718 4.24503C1.7718 3.88089 2.067 3.58569 2.43114 3.58569L10.561 3.58569C10.9423 3.58569 11.3012 3.76538 11.5297 4.07059L13.9305 7.27764C14.4145 7.92416 15.384 7.92417 15.868 7.27764L18.2688 4.07059C18.4972 3.76538 18.8562 3.58569 19.2375 3.58569H21.5824C22.5791 3.58569 23.1484 4.72309 22.5511 5.52095L18.1262 11.4319C17.8044 11.8618 17.8044 12.4524 18.1262 12.8823L22.5511 18.7932C23.1484 19.5911 22.5791 20.7285 21.5824 20.7285H19.2375C18.8562 20.7285 18.4972 20.5488 18.2688 20.2436L15.868 17.0365C15.384 16.39 14.4145 16.39 13.9305 17.0365L11.5297 20.2436C11.3012 20.5488 10.9423 20.7285 10.561 20.7285H1.78685C1.42271 20.7285 1.12751 20.4333 1.12751 20.0691V20.0691C1.12751 19.705 1.42271 19.4098 1.78685 19.4098H6.45575C6.66349 19.4098 6.85908 19.3119 6.98357 19.1456L7.04879 19.0585C7.34734 18.6596 7.06276 18.0911 6.56457 18.0911V18.0911C6.23051 18.0911 5.9597 17.8203 5.9597 17.4862V17.4318C5.9597 17.0676 6.25489 16.7724 6.61904 16.7724H8.43008C8.63782 16.7724 8.83341 16.6745 8.9579 16.5082V16.5082C9.28335 16.0735 8.97313 15.4538 8.43008 15.4538H3.39758C3.03343 15.4538 2.73824 15.1586 2.73824 14.7944V14.7944C2.73824 14.4303 3.03344 14.1351 3.39758 14.1351H10.4044C10.6121 14.1351 10.8077 14.0372 10.9322 13.8709V13.8709C11.2577 13.4361 10.9475 12.8164 10.4044 12.8164H8.55191C8.18777 12.8164 7.89257 12.5212 7.89257 12.1571V12.1571C7.89257 11.7929 8.18777 11.4977 8.55191 11.4977H10.4044C10.9475 11.4977 11.2577 10.878 10.9322 10.4433V10.4433C10.8077 10.277 10.6121 10.1791 10.4044 10.1791H0.659337C0.295195 10.1791 0 9.88387 0 9.51973V9.51973C0 9.15558 0.295195 8.86039 0.659337 8.86039H8.43008C8.97313 8.86039 9.28335 8.24065 8.9579 7.80592V7.80592C8.83341 7.63962 8.63782 7.54172 8.43008 7.54172H5.33045C4.96631 7.54172 4.67111 7.24652 4.67111 6.88238V6.88238C4.67111 6.51824 4.96631 6.22304 5.33045 6.22304H6.45575C6.9988 6.22304 7.30902 5.60331 6.98358 5.16857V5.16857C6.85908 5.00227 6.66349 4.90437 6.45575 4.90437H2.43114C2.067 4.90437 1.7718 4.60917 1.7718 4.24503V4.24503Z'
									fill='#03061A'
								/>
								<path
									d='M4.67111 12.1571C4.67111 11.7929 4.96631 11.4977 5.33045 11.4977H6.58894C6.95309 11.4977 7.24828 11.7929 7.24828 12.1571V12.1571C7.24828 12.5212 6.95309 12.8164 6.58894 12.8164H5.33045C4.96631 12.8164 4.67111 12.5212 4.67111 12.1571V12.1571Z'
									fill='#03061A'
								/>
								<path
									d='M4.02682 6.88238C4.02682 6.51824 3.73163 6.22304 3.36749 6.22304H2.10899C1.74485 6.22304 1.44965 6.51824 1.44965 6.88238V6.88238C1.44965 7.24652 1.74485 7.54172 2.10899 7.54172H3.36749C3.73163 7.54172 4.02682 7.24652 4.02682 6.88238V6.88238Z'
									fill='#03061A'
								/>
							</svg>
							<div className='tasks-box__item-text'>
								<h3>{task.name}</h3>
								<p>+ {task.rewardPoints.toString()}</p>
							</div>
						</div>
						<div className='tasks-box__item-claim claim-disabled'>Claim</div>
					</div>
				))}
			</div>
			<FooterMenu />
		</main>
	)
}

export default Tasks
