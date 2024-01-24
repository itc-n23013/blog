import styles from '../../styles/id.module.css'
const UserDetails = ({ user, todos }) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.suite},{' '}
        {user.address.city}, {user.address.zipcode}
      </p>
      <br />
      <br />
      <h2>todo list</h2>
      <ul className={styles.listStyle}>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? '◎' : '✖'} {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  const paths = users.map(user => ({
    params: { id: user.id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }) => {
  const [userResponse, todosResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
  ])
  const user = await userResponse.json()
  const todos = await todosResponse.json()
  return {
    props: {
      user,
      todos
    }
  }
}
export default UserDetails
