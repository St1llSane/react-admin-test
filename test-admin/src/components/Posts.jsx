import {
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const Posts = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  )
}

export const PostsEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" sx={{ width: '100%', maxWidth: '600px' }} />
        <TextInput
          source="body"
          multiline
          rows={10}
          sx={{ width: '100%', maxWidth: '800px' }}
        />
      </SimpleForm>
    </Edit>
  )
}
