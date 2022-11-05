import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TraitMethodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="display" source="display" />
        <TextInput label="method" source="method" />
        <NumberInput step={1} label="sort_factor" source="sortFactor" />
        <NumberInput step={1} label="total_points" source="totalPoints" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
