import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TraitMethodList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trait Methods"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="display" source="display" />
        <TextField label="ID" source="id" />
        <TextField label="method" source="method" />
        <TextField label="sort_factor" source="sortFactor" />
        <TextField label="total_points" source="totalPoints" />
        <TextField label="types" source="types" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
