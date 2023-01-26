import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import UserList from './components/UserList'
import { Posts, PostsCreate, PostsEdit } from './components/Posts'
import UserIcon from '@mui/icons-material/Group'
import PostIcon from '@mui/icons-material/Book'
import { Dashboard } from './components/Dashboard'
import { authProvider } from './authProvider'
import './App.css'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource
        name="users"
        list={UserList}
        recordRepresentation="name"
        icon={UserIcon}
      />
      <Resource
        name="posts"
        list={Posts}
        edit={PostsEdit}
        create={PostsCreate}
        icon={PostIcon}
      />
    </Admin>
  )
}

export default App
