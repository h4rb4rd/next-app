import styles from '../../styles/user.module.scss'

export default function User({ user }) {
	return (
		<div className={styles.user}>
			<h1>Пользователь с id: {user.id}</h1>
			<p>Имя пользователя - {user.name}</p>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	)
	const user = await response.json()
	return {
		props: { user },
	}
}
