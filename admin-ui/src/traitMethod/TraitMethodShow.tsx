import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TraitMethodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="display" source="display" />
        <TextField label="ID" source="id" />
        <TextField label="method" source="method" />
        <TextField label="sort_factor" source="sortFactor" />
        <TextField label="total_points" source="totalPoints" />
        <TextField label="types" source="types" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
