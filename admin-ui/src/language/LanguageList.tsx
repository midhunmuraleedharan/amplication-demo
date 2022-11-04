import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LanguageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"languages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bcp_47_language_tag" source="bcp_47LanguageTag" />
        <TextField label="db_value" source="dbValue" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="language_name" source="languageName" />
        <TextField label="linkedin_urn" source="linkedinUrn" />
        <TextField label="region" source="region" />
      </Datagrid>
    </List>
  );
};
