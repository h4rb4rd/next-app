import { useState } from 'react'
import Link from 'next/link'

const initialUsers = [
	{ id: 1, name: 'Пользователь 1' },
	{ id: 2, name: 'Пользователь 2' },
]

const Users = () => {
	const [users, setUsers] = useState(initialUsers)
	return (
		<div>
			<h1>Список пользователей</h1>
			<ul>
				{users.map(({ name, id }) => (
					<li key={id}>
						<Link href={`/users/${id}`}>
							<a>{name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
