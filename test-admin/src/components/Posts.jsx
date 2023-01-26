import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
  useRecordContext,
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

const PostTitle = () => {
  const record = useRecordContext()
  return <span>Post {record ? `${record.title}` : ''}</span>
}

export const PostsEdit = () => {
  return (
    <Edit title={<PostTitle />}>
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

export const PostsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" sx={{ width: '100%', maxWidth: '600px' }} />
        <TextInput
          source="body"
          multiline
          rows={10}
          sx={{ width: '100%', maxWidth: '800px' }}
        />
      </SimpleForm>
    </Create>
  )
}
