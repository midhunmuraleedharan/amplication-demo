import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LanguageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bcp_47_language_tag" source="bcp_47LanguageTag" />
        <TextField label="db_value" source="dbValue" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="language_name" source="languageName" />
        <TextField label="linkedin_urn" source="linkedinUrn" />
        <TextField label="region" source="region" />
      </SimpleShowLayout>
    </Show>
  );
};
