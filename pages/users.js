import A from '../components/A'

const initialUsers = [
	{ id: 1, name: 'Пользователь 1' },
	{ id: 2, name: 'Пользователь 2' },
]

const Users = ({ users }) => {
	return (
		<div>
			<h1>Список пользователей</h1>
			<ul>
				{users.map(({ name, id }) => (
					<li key={id}>
						<A href={`/users/${id}`} text={name} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users

export async function getStaticProps(context) {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await response.json()

	return {
		props: { users },
	}
}
