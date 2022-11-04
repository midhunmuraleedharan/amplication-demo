import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LanguageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="display" source="display" />
        <TextInput label="region" source="region" />
      </SimpleForm>
    </Edit>
  );
};
