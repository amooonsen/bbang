import React, {
  HTMLAttributes,
} from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {Input} from "../ui/Input";
import {Checkbox} from "../ui/Checkbox";
import {Label} from "../ui/Label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../ui/RadioGroup";
import {cn} from "@/utils/string";
import {
  Control,
  FieldValues,
  ControllerRenderProps,
} from "react-hook-form";

interface BaseFormFieldProps
  extends HTMLAttributes<HTMLDivElement> {
  control: Control<FieldValues>;
  name: string;
  label: string;
  required?: boolean;
  renderField?: (
    field: ControllerRenderProps<
      FieldValues,
      string
    >
  ) => JSX.Element;

  className?: string;
}

const BaseFormField: React.FC<
  BaseFormFieldProps
> = ({
  control,
  name,
  label,
  required = false,
  renderField = () => null,
  className,
  ...props
}) => (
  <FormField
    control={control}
    name={name}
    render={({field}) => (
      <FormItem
        className={className}
        {...props}
      >
        <FormLabel
          required={required}
        >
          {label}
        </FormLabel>
        <FormControl>
          {renderField(field)}
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

interface TextFormFieldProps
  extends BaseFormFieldProps {}

export const TextFormField: React.FC<
  TextFormFieldProps
> = ({
  control,
  name,
  label,
  required = false,
  className,
  ...props
}) => (
  <BaseFormField
    control={control}
    name={name}
    label={label}
    required={required}
    className={className}
    renderField={(field) => (
      <Input
        readOnly
        disabled
        {...field}
      />
    )}
    {...props}
  />
);

interface CheckboxFormFieldProps
  extends BaseFormFieldProps {}

export const CheckboxFormField: React.FC<
  CheckboxFormFieldProps
> = ({
  control,
  name,
  label,
  required = false,
  className,
  ...props
}) => (
  <BaseFormField
    control={control}
    name={name}
    label={label}
    required={required}
    className={className}
    renderField={(field) => (
      <Checkbox {...field} />
    )}
    {...props}
  />
);

interface RadioGroupFormFieldProps
  extends BaseFormFieldProps {
  state: string;
  setState: (
    value: string
  ) => void;
}

export const RadioGroupFormField: React.FC<
  RadioGroupFormFieldProps
> = ({
  control,
  name,
  label,
  required = false,
  state,
  setState,
  className,
  ...props
}) => (
  <BaseFormField
    control={control}
    name={name}
    label={label}
    required={required}
    className={className}
    renderField={(field) => (
      <RadioGroup variant="full">
        {[
          "company",
          "estate",
          "startup",
        ].map((value) => (
          <div
            key={value}
            className={cn(
              "item-wrap",
              {
                "is-checked":
                  state ===
                  value,
              }
            )}
          >
            <RadioGroupItem
              {...field}
              value={value.toUpperCase()}
              onClick={() => {
                setState &&
                  setState(
                    value
                  );
              }}
              id={`category-${value}`}
            />
            <Label
              className="input-label"
              htmlFor={`category-${value}`}
            >
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    )}
    {...props}
  />
);
