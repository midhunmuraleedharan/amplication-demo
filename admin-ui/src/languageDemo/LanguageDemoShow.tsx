import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LanguageDemoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bcp_47_language_tag" source="bcp_47LanguageTag" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="db_value" source="dbValue" />
        <TextField label="description" source="description" />
        <TextField label="display" source="display" />
        <TextField label="ID" source="id" />
        <TextField label="language_name" source="languageName" />
        <TextField label="region" source="region" />
        <TextField label="sort_factor" source="sortFactor" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
