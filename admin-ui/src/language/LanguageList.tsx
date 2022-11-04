import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
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
        <TextField label="bcp-47-language-tag" source="bcp_47LanguageTag" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="db-value" source="dbValue" />
        <TextField label="description" source="description" />
        <TextField label="display" source="display" />
        <TextField label="ID" source="id" />
        <TextField label="linkedin-urn" source="linkedinUrn" />
        <TextField label="region" source="region" />
        <TextField
          label="sort-factorlanguage-name"
          source="sortFactorlanguageName"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
