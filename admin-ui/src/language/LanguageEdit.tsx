import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bcp_47_language_tag" source="bcp_47LanguageTag" />
        <NumberInput step={1} label="db_value" source="dbValue" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="language_name" source="languageName" />
        <NumberInput label="linkedin_urn" source="linkedinUrn" />
        <TextInput label="region" source="region" />
      </SimpleForm>
    </Edit>
  );
};
