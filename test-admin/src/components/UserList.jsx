import { Datagrid, EmailField, List, SimpleList, TextField } from 'react-admin'
import { useMediaQuery } from '@mui/material'

const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  )
}

export default UserList
