import { Link } from 'react-router-dom'
import './AppLink.scss'

const AppLink = ({ to, text, classes }) => {
	const className = classes ? `app-link ${classes}` : 'app-link'
	return (
		<Link className={className} to={to}>
			{text}
		</Link>
	)
}
export default AppLink
