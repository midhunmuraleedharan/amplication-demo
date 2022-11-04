import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LanguageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
