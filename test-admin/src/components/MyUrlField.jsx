import { useRecordContext } from 'react-admin'
import { Link } from '@mui/material'
import LaunchRounded from '@mui/icons-material/LaunchRounded'

const MyUrlField = ({ source }) => {
  const record = useRecordContext()
  return record ? (
    <Link href={record[source]} sx={{ textDecoration: 'none' }}>
      {record[source]}
      <LaunchRounded sx={{ fontSize: 15, ml: 1}} />
    </Link>
  ) : null
}

export default MyUrlField
