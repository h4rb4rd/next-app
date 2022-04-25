import { useState } from 'react'
import Link from 'next/link'

import A from '../components/A'

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
						<A href={`/users/${id}`} text={name} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
