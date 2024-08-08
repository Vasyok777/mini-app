import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import { UserServiceClient } from '../../generated/user.client'
import './Login.scss'

const Login = () => {
	const navigate = useNavigate()
	const [nickname, setNickname] = useState('')
	const [initData, setInitData] = useState(null)
	const [user, setUser] = useState(null)
	const [avatarPreview, setAvatarPreview] = useState(null)

	const transport = new GrpcWebFetchTransport({
		baseUrl: 'http://5.61.54.103:50052',
	})

	const client = new UserServiceClient(transport)

	const handleUpload = event => {
		const file = event.target.files[0]
		const tg = window.Telegram.WebApp
		const initDataUnsafe = tg.initDataUnsafe
		const user = initDataUnsafe.user
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				const base64Avatar = reader.result
				setAvatarPreview(base64Avatar)

				client
					.setUserAvatar({ telegramId: 342, avatarUrl: base64Avatar })
					.then(response => {
						console.log('Avatar uploaded', response.response)
						handleCancel() // Виклик handleCancel після успішного завантаження
					})
			}
			reader.readAsDataURL(file)
		}
	}

	useEffect(() => {
		const tg = window.Telegram.WebApp
		const initDataUnsafe = tg.initDataUnsafe
		const user = initDataUnsafe.user
		setInitData(initDataUnsafe)
		setUser(user)
		if (user) {
			setNickname(user.username)
		}
	}, [client])

	const handleContinue = () => {
		const tg = window.Telegram.WebApp
		const initDataUnsafe = tg.initDataUnsafe
		const user = initDataUnsafe.user
		client
			.createUser({ telegramId: user.id, nickname: user.username })
			.then(response => console.log(response.response))
		navigate('/crafting')
	}

	const handleCancel = () => {
		document.body.classList.remove('lock')
	}

	return (
		<>
			<main className='login wrapper'>
				<h1 className='login-title'>
					Boom!
					<br />
					Welcome to the crew
				</h1>
				<div className='login-ava'>
					<Avatar isEdit={true} src={avatarPreview} /> {/* Передача прев'ю */}
				</div>
				<div className='login-bottom'>
					<form className='login-form'>
						<label className='login-form__label'>
							Nickname
							<p className='login-form__label-success'>
								Good one! That’s available
							</p>
						</label>
						<div className='login-form__input'>
							<input
								type='text'
								value={nickname}
								placeholder='Enter your name'
								onChange={e => setNickname(e.target.value)}
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='25'
								viewBox='0 0 24 25'
								fill='none'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12.0045 2.4259C17.8025 2.4259 22.5045 7.12796 22.5045 12.926C22.5045 18.724 17.8025 23.426 12.0045 23.426C6.20645 23.426 1.50439 18.724 1.50439 12.926C1.50439 7.12796 6.20645 2.4259 12.0045 2.4259ZM9.82399 16.3365L7.25332 13.7637C6.81536 13.3255 6.81527 12.6109 7.25332 12.1727C7.69145 11.7347 8.40923 11.7374 8.84418 12.1727L10.6565 13.9865L15.1649 9.47804C15.603 9.03991 16.3177 9.03991 16.7558 9.47804C17.1939 9.91609 17.1933 10.6314 16.7558 11.0689L11.4506 16.374C11.0131 16.8115 10.2978 16.8122 9.85977 16.374C9.84746 16.3617 9.83559 16.3492 9.82399 16.3365Z'
									fill='#1FCC5D'
								/>
							</svg>
						</div>
					</form>
					<button className='app-link app-link-button' onClick={handleContinue}>
						Continue
					</button>
				</div>

				<div className='login-choose'>
					<h4>Edit avatar</h4>
					<button className='login-choose__button'>
						Choose from gallery
						<input type='file' onChange={handleUpload} />
					</button>
					<button className='login-choose__cancel' onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</main>
			<div className='login-choose__overlay'></div>
		</>
	)
}

export default Login
