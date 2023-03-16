import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import MyUrlField from "./MyUrlField";


export const UserList = () => {
    const theme = useTheme();
    const isSmall= useMediaQuery(theme.breakpoints.down('sm'));
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
            <MyUrlField source="website" />
            <TextField source="company.name" />
          </Datagrid>
        )}
      </List>
    );
  };
            




      

