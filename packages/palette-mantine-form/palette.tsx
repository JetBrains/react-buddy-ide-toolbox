import React from "react";
import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox";
import { useForm, isEmail } from "@mantine/form";
import { Button, Checkbox, NumberInput, TextInput } from "@mantine/core";

export default () => (
  <Palette>
    <Category name="form">
      <Component name="form" docURL="https://mantine.dev/form/use-form/">
        <Variant proto={FormProto} />
        <Variant name="example" proto={FormExampleProto} />
      </Component>
    </Category>
  </Palette>
);

function FormProto() {
  const form = useForm({
    initialValues: {},
    validate: {},
  });

  const handleError = (errors: typeof form.errors) => { };

  const handleSubmit = (values: typeof form.values) => { };

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit, handleError)}
      onReset={form.onReset}
    >
      {/* Place for inputs */}

      <Button type="submit">Submit</Button>
      <Button type="reset">Reset</Button>
    </form>
  );
}

function FormExampleProto() {
  const form = useForm({
    initialValues: {
      email: "",
      boolean: false,
      object: {
        number: 0,
      },
    },
    validate: {
      email: isEmail('Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.email) {
      console.error("Please provide a valid email");
    }
  };

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit, handleError)}
      onReset={form.onReset}
    >
      <TextInput withAsterisk label="Email" {...form.getInputProps("email")} />

      <Checkbox
        mt="md"
        label="Boolean"
        {...form.getInputProps("boolean", { type: "checkbox" })}
      />

      <NumberInput label="Number" {...form.getInputProps("object.number")} />

      <Button type="submit">Submit</Button>
      <Button type="reset">Reset</Button>
    </form>
  );
}