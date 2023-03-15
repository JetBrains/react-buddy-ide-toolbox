import React, { useRef, useState } from "react";
import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox";
import {
  Calendar,
  DateInput,
  DatePicker,
  DatePickerInput,
  DatesProvider,
  DateTimePicker,
  MonthPicker,
  MonthPickerInput,
  TimeInput,
  YearPicker,
  YearPickerInput
} from "@mantine/dates";
import { ActionIcon, CheckIcon, Indicator } from "@mantine/core";

export default () => (
  <Palette embeddable>
    <Category name="dates">
      <Component name="DatesProvider" docURL="https://mantine.dev/dates/dates-provider/">
        <Variant>
          <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
            {/* if you want to use for example locale ru you need to place at the beginning of the file "import 'dayjs/locale/ru';" */}
          </DatesProvider>
        </Variant>
      </Component>
      <Component name="Calendar" docURL="https://mantine.dev/dates/calendar/">
        <Variant>
          <Calendar />
        </Variant>
      </Component>
      <Component name="DateInput" docURL="https://mantine.dev/dates/date-input/">
        <Variant proto={DateInputProto} />
        <Variant name="filled">
          <DateInput
            label="Date input"
            placeholder="Date input"
            variant="filled"
          />
        </Variant>
        <Variant name="unstyled">
          <DateInput
            label="Date input"
            placeholder="Date input"
            variant="unstyled"
          />
        </Variant>
        <Variant name="allowDeselect">
          <DateInput
            allowDeselect
            label="Date input"
            placeholder="Date input"
          />
        </Variant>
        <Variant name="disabled">
          <DateInput
            placeholder="Current date"
            label="Current date"
            disabled
          />
        </Variant>
        <Variant name="min and max">
          <DateInput
            placeholder="Current date"
            label="Current date"
            minDate={new Date(2023, 1, 1)}
            maxDate={new Date(2023, 8, 1)}
          />
        </Variant>
        <Variant name="with format">
          <DateInput
            valueFormat="DD/MM/YYYY HH:mm:ss"
            label="Date input"
            placeholder="Date input"
          />
        </Variant>
        <Variant name="with error">
          <DateInput
            placeholder="Current date"
            label="Current date"
            error="Error message"
          />
        </Variant>
      </Component>
      <Component name="DatePicker" docURL="https://mantine.dev/dates/date-picker/">
        <Variant proto={DatePickerProto} />
        <Variant name="allowDeselect">
          <DatePicker allowDeselect />
        </Variant>
        <Variant name="multiple">
          <DatePicker type="multiple" />
        </Variant>
        <Variant name="range">
          <DatePicker type="range" allowSingleDateInRange />
        </Variant>
        <Variant name="decade">
          <DatePicker defaultLevel="decade" />
        </Variant>
        <Variant name="year">
          <DatePicker defaultLevel="year" />
        </Variant>
        <Variant name="firstDayOfWeek">
          <DatePicker firstDayOfWeek={0} />
        </Variant>
        <Variant name="hideWeekdays">
          <DatePicker hideWeekdays />
        </Variant>
        <Variant name="weekendDays">
          <DatePicker weekendDays={[1, 2]} />
        </Variant>
        <Variant name="renderDay">
          <DatePicker
            renderDay={(date) => {
              const day = date.getDate();
              return (
                <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
                  <div>{day}</div>
                </Indicator>
              );
            }}
          />
        </Variant>
        <Variant name="min and max">
          <DatePicker
            minDate={new Date(2023, 1, 1)}
            maxDate={new Date(2023, 8, 1)}
          />
        </Variant>
        <Variant name="numberOfColumns">
          <DatePicker type="range" numberOfColumns={2} />
        </Variant>
      </Component>
      <Component name="DatePickerInput" docURL="https://mantine.dev/dates/date-picker-input/">
        <Variant proto={DatePickerInputProto} />
        <Variant name="filled">
          <DatePickerInput
            placeholder="Pick date"
            label="Pick date"
            variant="filled"
          />
        </Variant>
        <Variant name="unstyled">
          <DatePickerInput
            placeholder="Pick date"
            label="Pick date"
            variant="unstyled"
          />
        </Variant>
        <Variant name="disabled">
          <DatePickerInput
            placeholder="Pick date"
            label="Pick date"
            disabled
          />
        </Variant>
        <Variant name="multiple">
          <DatePickerInput
            type="multiple"
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="range">
          <DatePickerInput
            type="range"
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="modal">
          <DatePickerInput
            dropdownType="modal"
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="clearable">
          <DatePickerInput
            clearable
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="with icon">
          <DatePickerInput
            icon={<CheckIcon />}
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
        <Variant name="with format">
          <DatePickerInput
            valueFormat="DD/MM/YYYY HH:mm:ss"
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
      </Component>
      <Component name="DateTimePicker" docURL="https://mantine.dev/dates/date-time-picker/">
        <Variant proto={DateTimePickerProto} />
        <Variant name="filled">
          <DateTimePicker
            placeholder="Current date and time"
            label="Current date and time"
            variant="filled"
          />
        </Variant>
        <Variant name="unstyled">
          <DateTimePicker
            placeholder="Current date and time"
            label="Current date and time"
            variant="unstyled"
          />
        </Variant>
        <Variant name="disabled">
          <DateTimePicker
            placeholder="Current date and time"
            label="Current date and time"
            disabled
          />
        </Variant>
        <Variant name="withSeconds">
          <DateTimePicker
            withSeconds
            label="Pick date and time"
            placeholder="Pick date and time"
          />
        </Variant>
        <Variant name="modal">
          <DateTimePicker
            dropdownType="modal"
            label="Pick date and time"
            placeholder="Pick date and time"
          />
        </Variant>
        <Variant name="clearable">
          <DateTimePicker
            clearable
            label="Pick date and time"
            placeholder="Pick date and time"
          />
        </Variant>
        <Variant name="with format">
          <DateTimePicker
            valueFormat="DD MMM YYYY hh:mm A"
            label="Pick date and time"
            placeholder="Pick date and time"
          />
        </Variant>
        <Variant name="with error">
          <DateTimePicker
            placeholder="Current date and time"
            label="Current date and time"
            error="Error message"
            variant="filled"
            disabled
          />
        </Variant>
      </Component>
      <Component name="MonthPicker" docURL="https://mantine.dev/dates/month-picker/">
        <Variant proto={MonthPickerProto} />
        <Variant name="allowDeselect">
          <MonthPicker allowDeselect />
        </Variant>
        <Variant name="multiple">
          <MonthPicker type="multiple" />
        </Variant>
        <Variant name="range">
          <MonthPicker type="range" allowSingleDateInRange />
        </Variant>
        <Variant name="defaultDate">
          <MonthPicker defaultDate={new Date(2015, 1)} />
        </Variant>
        <Variant name="min and max">
          <MonthPicker
            minDate={new Date(2023, 1, 1)}
            maxDate={new Date(2023, 8, 1)}
          />
        </Variant>
        <Variant name="numberOfColumns">
          <MonthPicker type="range" numberOfColumns={2} />
        </Variant>
        <Variant name="maxLevel">
          <MonthPicker maxLevel="year" />
        </Variant>
        <Variant name="with format">
          <MonthPicker
            monthsListFormat="MM"
            yearsListFormat="YY"
            decadeLabelFormat="YY"
            yearLabelFormat="YYYY [year]"
          />
        </Variant>
      </Component>
      <Component name="MonthPickerInput" docURL="https://mantine.dev/dates/month-picker-input/">
        <Variant proto={MonthPickerInputProto} />
        <Variant name="filled">
          <MonthPickerInput
            placeholder="Pick date"
            label="Pick date"
            variant="filled"
          />
        </Variant>
        <Variant name="unstyled">
          <MonthPickerInput
            placeholder="Pick date"
            label="Pick date"
            variant="unstyled"
          />
        </Variant>
        <Variant name="disabled">
          <MonthPickerInput
            placeholder="Pick date"
            label="Pick date"
            disabled
          />
        </Variant>
        <Variant name="multiple">
          <MonthPickerInput
            type="multiple"
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="range">
          <MonthPickerInput
            type="range"
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="modal">
          <MonthPickerInput
            dropdownType="modal"
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
        <Variant name="clearable">
          <MonthPickerInput
            clearable
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
        <Variant name="with format">
          <MonthPickerInput
            valueFormat="YYYY MMM"
            label="Pick month"
            placeholder="Pick month"
          />
        </Variant>
        <Variant name="with icon">
          <MonthPickerInput
            icon={<CheckIcon />}
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
        <Variant name="with error">
          <MonthPickerInput
            placeholder="Pick date"
            label="Pick date"
            error="Error message"
          />
        </Variant>
      </Component>
      <Component name="TimeInput" docURL="https://mantine.dev/dates/time-input/">
        <Variant>
          <TimeInput label="Current time" />
        </Variant>
        <Variant name="filled">
          <TimeInput
            label="Current time"
            variant="filled"
          />
        </Variant>
        <Variant name="unstyled">
          <TimeInput
            label="Current time"
            variant="unstyled"
          />
        </Variant>
        <Variant name="disabled">
          <TimeInput
            label="Current time"
            disabled
          />
        </Variant>
        <Variant name="showPicker" proto={TimeInputWithShowPickerProto} />
        <Variant name="withSeconds">
          <TimeInput withSeconds />
        </Variant>
        <Variant name="with error">
          <TimeInput
            label="Current time"
            error="Error message"
          />
        </Variant>
        <Variant name="with icon">
          <TimeInput icon={<CheckIcon />} />
        </Variant>
      </Component>
      <Component name="YearPicker" docURL="https://mantine.dev/dates/year-picker/">
        <Variant proto={YearPickerProto} />
        <Variant name="allowDeselect ">
          <YearPicker allowDeselect />
        </Variant>
        <Variant name="multiple">
          <YearPicker type="multiple" />
        </Variant>
        <Variant name="range">
          <YearPicker type="range" allowSingleDateInRange />
        </Variant>
        <Variant name="defaultDate">
          <YearPicker defaultDate={new Date(2040, 1)} />
        </Variant>
        <Variant name="min and max">
          <YearPicker
            minDate={new Date(2021, 1)}
            maxDate={new Date(2028, 1)}
          />
        </Variant>
        <Variant name="numberOfColumns">
          <YearPicker type="range" numberOfColumns={2} />
        </Variant>
        <Variant name="with format">
          <YearPicker yearsListFormat="YY" decadeLabelFormat="YY" />
        </Variant>
      </Component>
      <Component name="YearPickerInput" docURL="https://mantine.dev/dates/year-picker-input/">
        <Variant proto={YearPickerInputProto} />
        <Variant name="filled">
          <YearPickerInput
            placeholder="Pick date"
            label="Pick date"
            variant="filled"
          />
        </Variant>
        <Variant name="unstyled">
          <YearPickerInput
            placeholder="Pick date"
            label="Pick date"
            variant="unstyled"
          />
        </Variant>
        <Variant name="disabled">
          <YearPickerInput
            placeholder="Pick date"
            label="Pick date"
            disabled
          />
        </Variant>
        <Variant name="multiple">
          <YearPickerInput
            type="multiple"
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="range">
          <YearPickerInput
            type="range"
            allowSingleDateInRange
            label="Pick dates"
            placeholder="Pick dates"
          />
        </Variant>
        <Variant name="modal">
          <YearPickerInput
            dropdownType="modal"
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
        <Variant name="clearable">
          <YearPickerInput
            clearable
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
        <Variant name="with format">
          <YearPickerInput
            decadeLabelFormat="YY"
            yearsListFormat="YY"
            valueFormat="YY"
            label="Pick year"
            placeholder="Pick year"
          />
        </Variant>
        <Variant name="with error">
          <YearPickerInput
            placeholder="Pick date"
            label="Pick date"
            error="Error message"
          />
        </Variant>
        <Variant name="with icon">
          <YearPickerInput
            icon={<CheckIcon />}
            label="Pick date"
            placeholder="Pick date"
          />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

function DateInputProto() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      mx="auto"
      maw={400}
    />
  );
}

function DatePickerProto() {
  const [value, setValue] = useState<Date | null>(null);
  return <DatePicker value={value} onChange={setValue} />;
}


function DatePickerInputProto() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}

function DateTimePickerProto() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateTimePicker
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      mx="auto"
      maw={400}
    />
  )
}

function MonthPickerProto() {
  const [value, setValue] = useState<Date | null>(null);
  return <MonthPicker value={value} onChange={setValue} />;
}

function MonthPickerInputProto() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}

function TimeInputWithShowPickerProto() {
  const ref = useRef<HTMLInputElement & { showPicker: () => void }>(null);

  return (
    <TimeInput
      label="Click click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current?.showPicker()}>
          <CheckIcon />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}

function YearPickerProto() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker value={value} onChange={setValue} />;
}

function YearPickerInputProto() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <YearPickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}