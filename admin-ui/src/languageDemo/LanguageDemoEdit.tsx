import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LanguageDemoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bcp_47_language_tag" source="bcp_47LanguageTag" />
        <NumberInput step={1} label="db_value" source="dbValue" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="display" source="display" />
        <TextInput label="language_name" source="languageName" />
        <TextInput label="region" source="region" />
        <TextInput label="sort_factor" source="sortFactor" />
      </SimpleForm>
    </Edit>
  );
};
