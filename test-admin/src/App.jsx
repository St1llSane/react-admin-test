import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import UserList from './components/UserList'
import Posts from './components/Posts'
import './App.css'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} recordRepresentation="name" />
      <Resource name="posts" list={Posts} />
    </Admin>
  )
}

export default App
