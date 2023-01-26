import { Datagrid, EmailField, List, SimpleList, TextField } from 'react-admin'

const UserList = () => {
  return (
    <List>
      <SimpleList
        primaryText={(record) => record.name}
        secondaryText={(record) => record.username}
        tertiaryText={(record) => record.email}
      />
    </List>
  )
}

export default UserList
