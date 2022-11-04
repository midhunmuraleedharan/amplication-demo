import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const LanguageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bcp-47-language-tag" source="bcp_47LanguageTag" />
        <NumberInput step={1} label="db-value" source="dbValue" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="display" source="display" />
        <TextInput label="linkedin-urn" source="linkedinUrn" />
        <TextInput label="region" source="region" />
        <TextInput
          label="sort-factorlanguage-name"
          source="sortFactorlanguageName"
        />
      </SimpleForm>
    </Create>
  );
};
