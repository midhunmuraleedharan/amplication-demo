import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TraitMethodCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="display" source="display" />
        <TextInput label="method" source="method" />
        <NumberInput step={1} label="sort_factor" source="sortFactor" />
        <NumberInput step={1} label="total_points" source="totalPoints" />
        <div />
      </SimpleForm>
    </Create>
  );
};
