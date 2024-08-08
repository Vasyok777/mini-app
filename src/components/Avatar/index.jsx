import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { useEffect, useState } from 'react'
import { UserServiceClient } from '../../generated/user.client'
import './Avatar.scss'
import AvatarSvg from './AvatarSvg'

const Avatar = ({ isEdit, src }) => {
	const [avatarUrl, setAvatarUrl] = useState(src || null) // Встановлюємо початковий URL
	const [username, setUsername] = useState('U')
	const transport = new GrpcWebFetchTransport({
		baseUrl: 'http://5.61.54.103:50052',
	})

	const handleClick = () => {
		document.body.classList.toggle('lock')
	}

	const client = new UserServiceClient(transport)

	useEffect(() => {
		const tg = window.Telegram.WebApp
		const initDataUnsafe = tg.initDataUnsafe
		const user = initDataUnsafe.user

		setUsername(user?.username ? user.username[0].toUpperCase() : 'U')

		client.getUserAvatar({ telegramId: 342 }).then(response => {
			if (response.response.avatar && response.response.avatar.avatarUrl) {
				setAvatarUrl(response.response.avatar.avatarUrl)
			}
		})
	}, [avatarUrl, client])

	return (
		<div className='avatar'>
			{avatarUrl ? (
				<div className='avatar-img'>
					<img src={avatarUrl} alt={avatarUrl} className='avatar-image' />
				</div>
			) : (
				<div className='avatar-text'>{username}</div>
			)}
			{isEdit && (
				<button className='avatar-button' onClick={handleClick}>
					<AvatarSvg />
					Edit
				</button>
			)}
		</div>
	)
}

export default Avatar
