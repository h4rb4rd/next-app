import A from '../components/A'
import MainContainer from '../components/MainContainer'

const Users = ({ users }) => {
	return (
		<MainContainer keywords='users page' title='Список Пользователей'>
			<h1>Список пользователей</h1>
			<ul className='list'>
				{users.map(({ name, id }) => (
					<li key={id}>
						<A href={`/users/${id}`} text={name} />
					</li>
				))}
			</ul>
			<style jsx>{`
				.list {
					list-style: none;
					background: orange;
					padding: 15px;
				}
			`}</style>
		</MainContainer>
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
