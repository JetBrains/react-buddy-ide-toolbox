import React, { useCallback, useState } from "react";
import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox";
import {
  AppShell,
  Grid,
  SimpleGrid,
  Text,
  Center,
  Container,
  Stack,
  Group,
  Space,
  Code,
  Switch,
  Popover,
  MediaQuery,
  AspectRatio,
  Image,
  ActionIcon,
  Button,
  CloseButton,
  CopyButton,
  FileButton,
  UnstyledButton,
  Autocomplete,
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  AlphaSlider,
  HueSlider,
  FileInput,
  Input,
  JsonInput,
  MultiSelect,
  NativeSelect,
  NumberInput,
  PasswordInput,
  Radio,
  SegmentedControl,
  Select,
  Slider,
  RangeSlider,
  Textarea,
  TextInput,
  Anchor,
  Breadcrumbs,
  Burger,
  NavLink,
  Pagination,
  CheckIcon,
  Tabs,
  Badge,
  ColorSwatch,
  Stepper,
  Accordion,
  Avatar,
  BackgroundImage,
  Card,
  Indicator,
  Kbd,
  Spoiler,
  ThemeIcon,
  Timeline,
  Affix,
  Dialog,
  Drawer,
  HoverCard,
  LoadingOverlay,
  Menu,
  Modal,
  Overlay,
  Tooltip,
  Blockquote,
  Highlight,
  List,
  Mark,
  Table,
  Title,
  Alert,
  Loader,
  Notification,
  Progress,
  RingProgress,
  Skeleton,
  Box,
  Collapse,
  Divider,
  Paper,
  ScrollArea,
  Transition,
  TypographyStylesProvider,
  FocusTrap,
  TransferList,
  TransferListData,
  Rating,
  Header,
  Navbar,
  Portal,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default () => (
  <Palette embeddable>
    <Category name="Layout">
      <Component name="AppShell" docURL="https://mantine.dev/core/app-shell/">
        <Variant>
          <AppShell
              padding="md"
              navbar={<Navbar width={{ base: 300 }} height={500} p="xs">Navbar content</Navbar>}
              header={<Header height={60} p="xs">Header content</Header>}
              styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
              })}
          >
            Your application here
          </AppShell>
        </Variant>
      </Component>
      <Component
        name="AspectRatio"
        docURL="https://mantine.dev/core/aspect-ratio/"
      >
        <Variant previewLayout="stretch">
          <AspectRatio ratio={3 / 2} sx={{ maxWidth: 200 }} mx="auto">
            <Image
              alt="Panda"
              src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            />
          </AspectRatio>
        </Variant>
      </Component>
      <Component name="Center" docURL="https://mantine.dev/core/center/">
        <Variant>
          <Center style={{ width: 400, height: 200 }}>
            <div>All elements inside Center are centered</div>
          </Center>
        </Variant>
      </Component>
      <Component name="Container" docURL="https://mantine.dev/core/container/">
        <Variant>
          <Container>Content</Container>
        </Variant>
      </Component>
      <Component name="Grid" docURL="https://mantine.dev/core/grid/">
        <Variant>
          <Grid>
            <Grid.Col span={4}>Column 1</Grid.Col>
            <Grid.Col span={4}>Column 2</Grid.Col>
            <Grid.Col span={4}>Column 3</Grid.Col>
          </Grid>
        </Variant>
        <Variant name="grow">
          <Grid grow>
            <Grid.Col span={4}>Column 1</Grid.Col>
            <Grid.Col span={4}>Column 2</Grid.Col>
            <Grid.Col span={4}>Column 3</Grid.Col>
            <Grid.Col span={4}>Column 4</Grid.Col>
            <Grid.Col span={4}>Column 5</Grid.Col>
          </Grid>
        </Variant>
        <Variant name="with gutter">
          <Grid gutter="sm" style={{ width: "100%" }}>
            <Grid.Col span={4}>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "red",
                }}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "red",
                }}
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "red",
                }}
              />
            </Grid.Col>
            <CopyButton value="https://mantine.dev">
              {({ copied, copy }) => (
                <Button color={copied ? "teal" : "blue"} onClick={copy}>
                  {copied ? "Copied url" : "Copy url"}
                </Button>
              )}
            </CopyButton>
          </Grid>
        </Variant>
      </Component>
      <Component name="Group" docURL="https://mantine.dev/core/group/">
        <Variant>
          <Group spacing="sm">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Group>
        </Variant>
        <Variant name="grow">
          <Group grow>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Group>
        </Variant>
      </Component>
      <Component
        name="MediaQuery"
        docURL="https://mantine.dev/core/media-query/"
      >
        <Variant>
          <MediaQuery
            query="(max-width: 1200px) and (min-width: 800px)"
            styles={{ fontSize: 20, "&:hover": { backgroundColor: "silver" } }}
          >
            <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
          </MediaQuery>
        </Variant>
      </Component>
      <Component
        name="SimpleGrid"
        docURL="https://mantine.dev/core/simple-grid/"
      >
        <Variant>
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            <div>Column 1</div>
            <div>Column 2</div>
            <div>Column 3</div>
            <div>Column 4</div>
            <div>Column 5</div>
          </SimpleGrid>
        </Variant>
      </Component>
      <Component name="Space" docURL="https://mantine.dev/core/space/">
        <Variant name="width">
          <Space w="md" />
        </Variant>
        <Variant name="height">
          <Space h="md" />
        </Variant>
      </Component>
      <Component name="Stack" docURL="https://mantine.dev/core/stack/">
        <Variant previewLayout="stretch">
          <Stack>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Stack>
        </Variant>
        <Variant name="with spacing" previewLayout="stretch">
          <Stack spacing="sm">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Stack>
        </Variant>
        <Variant name="centred" previewLayout="stretch" style={{height: '100%'}}>
          <Stack align="center" justify="center" style={{height: '100%'}}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Stack>
        </Variant>
      </Component>
    </Category>
    <Category name="Buttons">
      <Component
        name="ActionIcon"
        docURL="https://mantine.dev/core/action-icon/"
      >
        <Variant>
          <ActionIcon>
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="filled">
          <ActionIcon variant="filled">
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="light">
          <ActionIcon variant="light">
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="outline">
          <ActionIcon variant="outline">
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="default">
          <ActionIcon variant="default">
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="transparent">
          <ActionIcon variant="transparent">
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="disabled">
          <ActionIcon disabled>
            <CheckIcon />
          </ActionIcon>
        </Variant>
        <Variant name="loading">
          <ActionIcon loading>
            <CheckIcon />
          </ActionIcon>
        </Variant>
      </Component>
      <Component name="Button" docURL="https://mantine.dev/core/button/">
        <Variant>
          <Button>Button</Button>
        </Variant>
        <Variant name="light">
          <Button variant="light">Button</Button>
        </Variant>
        <Variant name="outline">
          <Button variant="outline">Button</Button>
        </Variant>
        <Variant name="default">
          <Button variant="default">Button</Button>
        </Variant>
        <Variant name="disabled">
          <Button disabled>Button</Button>
        </Variant>
        <Variant name="compact">
          <Button compact>Button</Button>
        </Variant>
        <Variant name="loading">
          <Button loading>Button</Button>
        </Variant>
      </Component>
      <Component
        name="CloseButton"
        docURL="https://mantine.dev/core/close-button/"
      >
        <Variant>
          <CloseButton />
        </Variant>
      </Component>
      <Component
        name="CopyButton"
        docURL="https://mantine.dev/core/copy-button/"
      >
        <Variant>
          <CopyButton value="https://mantine.dev">
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "blue"} onClick={copy}>
                {copied ? "Copied url" : "Copy url"}
              </Button>
            )}
          </CopyButton>
        </Variant>
      </Component>
      <Component
        name="FileButton"
        docURL="https://mantine.dev/core/file-button/"
      >
        <Variant proto={FileButtonProto} />
        <Variant name="multiple" proto={FileButtonMultipleProto} />
      </Component>
      <Component
        name="UnstyledButton"
        docURL="https://mantine.dev/core/unstyled-button/"
      >
        <Variant>
          <UnstyledButton>Button</UnstyledButton>
        </Variant>
      </Component>
    </Category>
    <Category name="Inputs">
      <Component
        name="Autocomplete"
        docURL="https://mantine.dev/core/autocomplete/"
      >
        <Variant>
          <Autocomplete
            label="Your label"
            description="Your description"
            placeholder="Pick one"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="filled">
          <Autocomplete
            label="Your label"
            variant="filled"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="unstyled">
          <Autocomplete
            label="Your label"
            variant="unstyled"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="disabled">
          <Autocomplete
            label="Your label"
            disabled
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="with object data">
          <Autocomplete
            label="Your label"
            // Your custom item component with data properties
            itemComponent={({ value, label, ...otherProps }) => <div {...otherProps}>{label}</div>}
            data={[
              {
                value: "value1",
                label: "Label1",
              },
              {
                value: "value2",
                label: "Label2",
              },
              {
                value: "value3",
                label: "Label3",
              },
            ]}
          />
        </Variant>
        <Variant name="with error">
          <Autocomplete
            label="Your label"
            error="Error message"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="with icon">
          <Autocomplete
            label="Your label"
            icon={<CheckIcon />}
            data={["value1", "value2", "value3"]}
          />
        </Variant>
      </Component>
      <Component name="Checkbox" docURL="https://mantine.dev/core/checkbox/">
        <Variant>
          <Checkbox label="Your label" />
        </Variant>
        <Variant name="disabled">
          <Checkbox label="Your label" disabled />
        </Variant>
        <Variant name="indeterminate">
          <Checkbox label="Your label" indeterminate />
        </Variant>
        <Variant name="with color">
          <Checkbox label="Your label" color="red" checked />
        </Variant>
      </Component>
      <Component name="Chip" docURL="https://mantine.dev/core/chip/">
        <Variant>
          <Chip>Your label</Chip>
        </Variant>
        <Variant name="filled">
          <Chip variant="filled">Your label</Chip>
        </Variant>
        <Variant name="with color">
          <Chip color="red" checked>
            Your label
          </Chip>
        </Variant>
      </Component>
      <Component
        name="ColorInput"
        docURL="https://mantine.dev/core/color-input/"
      >
        <Variant>
          <ColorInput
            label="Your label"
            placeholder="Pick color"
            description="Your description"
          />
        </Variant>
        <Variant name="rgb">
          <ColorInput label="Your label" format="rgb" />
        </Variant>
        <Variant name="rgba">
          <ColorInput label="Your label" format="rgba" />
        </Variant>
        <Variant name="hsl">
          <ColorInput label="Your label" format="hsl" />
        </Variant>
        <Variant name="hsla">
          <ColorInput label="Your label" format="hsla" />
        </Variant>
        <Variant name="swatches">
          <ColorInput
            label="Your label"
            format="hex"
            swatchesPerRow={10}
            swatches={["#ff0000", "#00ff00", "#0000ff"]}
          />
        </Variant>
        <Variant name="without display">
          <ColorInput
            label="Your label"
            withPicker={false}
            format="hex"
            swatchesPerRow={10}
            swatches={["#ff0000", "#00ff00", "#0000ff"]}
          />
        </Variant>
        <Variant name="disallowInput">
          <ColorInput label="Your label" disallowInput />
        </Variant>
        <Variant name="filled">
          <ColorInput label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <ColorInput label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <ColorInput label="Your label" disabled />
        </Variant>
        <Variant name="with error">
          <ColorInput label="Your label" error="Your error message" />
        </Variant>
      </Component>
      <Component
        name="ColorPicker"
        docURL="https://mantine.dev/core/color-picker/"
      >
        <Variant>
          <ColorPicker />
        </Variant>
        <Variant name="rgb">
          <ColorPicker format="rgb" />
        </Variant>
        <Variant name="rgba">
          <ColorPicker format="rgba" />
        </Variant>
        <Variant name="hsl">
          <ColorPicker format="hsl" />
        </Variant>
        <Variant name="hsla">
          <ColorPicker format="hsla" />
        </Variant>
        <Variant name="swatches">
          <ColorPicker
            format="hex"
            swatchesPerRow={10}
            swatches={["#ff0000", "#00ff00", "#0000ff"]}
          />
        </Variant>
        <Variant name="without picker">
          <ColorPicker
            withPicker={false}
            format="hex"
            swatchesPerRow={10}
            swatches={["#ff0000", "#00ff00", "#0000ff"]}
          />
        </Variant>
        <Variant name="HueSlider" previewLayout="stretch">
          <HueSlider
            value={0}
            onChange={() => {
              /* Your code */
            }}
            onChangeEnd={() => {
              /* Your code */
            }}
          />
        </Variant>
        <Variant name="AlphaSlider" previewLayout="stretch">
          <AlphaSlider
            value={0}
            color="#1c7ed6"
            onChange={() => {
              /* Your code */
            }}
            onChangeEnd={() => {
              /* Your code */
            }}
          />
        </Variant>
      </Component>
      <Component name="FileInput" docURL="https://mantine.dev/core/file-input/">
        <Variant>
          <FileInput
            label="Your label"
            description="Your description"
            placeholder="Pick file"
          />
        </Variant>
        <Variant name="multiple">
          <FileInput label="Your label" placeholder="Upload files" multiple />
        </Variant>
        <Variant name="filled">
          <FileInput label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <FileInput label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <FileInput label="Your label" disabled />
        </Variant>
        <Variant name="with icon">
          <FileInput label="Your label" icon={<CheckIcon />} />
        </Variant>
        <Variant name="with error">
          <FileInput label="Your label" error="Error message" />
        </Variant>
      </Component>
      <Component name="Input" docURL="https://mantine.dev/core/input/">
        <Variant>
          <Input placeholder="Your placeholder" />
        </Variant>
        <Variant name="select">
          <Input placeholder="Your placeholder" component="select">
            <option value="1">1</option>
            <option value="2">2</option>
          </Input>
        </Variant>
        <Variant name="filled">
          <Input placeholder="Your placeholder" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <Input placeholder="Your placeholder" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <Input placeholder="Your placeholder" disabled />
        </Variant>
        <Variant name="with icon">
          <Input placeholder="Your placeholder" icon={<CheckIcon />} />
        </Variant>
      </Component>
      <Component
        name="Input.Wrapper"
        docURL="https://mantine.dev/core/input/#inputwrapper-component"
      >
        <Variant>
          <Input.Wrapper label="Your label" description="Your description">
            <Input />
          </Input.Wrapper>
        </Variant>
        <Variant name="with error">
          <Input.Wrapper label="Your label" error="Error message">
            <Input />
          </Input.Wrapper>
        </Variant>
      </Component>
      <Component name="JsonInput" docURL="https://mantine.dev/core/json-input/">
        <Variant>
          <JsonInput
            label="Your label"
            description="Your description"
            placeholder="Your placeholder"
          />
        </Variant>
        <Variant name="filled">
          <JsonInput label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <JsonInput label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <JsonInput label="Your label" disabled />
        </Variant>
        <Variant name="with error">
          <JsonInput label="Your label" error="Error message" />
        </Variant>
      </Component>
      <Component
        name="MultiSelect"
        docURL="https://mantine.dev/core/multi-select/"
      >
        <Variant>
          <MultiSelect
            label="Your label"
            placeholder="Your placeholder"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="group items">
          <MultiSelect
            label="Your label"
            data={[
              { value: "value1", label: "Value1", group: "group1" },
              { value: "value2", label: "Value2", group: "group1" },
              { value: "value3", label: "Value3", group: "group2" },
              { value: "value4", label: "Value4", group: "group2" },
            ]}
          />
        </Variant>
        <Variant name="disable items">
          <MultiSelect
            label="Your label"
            data={[
              { value: "value1", label: "Value1" },
              { value: "value2", label: "Value2", disabled: true },
              { value: "value3", label: "Value3" },
              { value: "value4", label: "Value4", disabled: true },
            ]}
          />
        </Variant>
      </Component>
      <Component
        name="NativeSelect"
        docURL="https://mantine.dev/core/native-select/"
      >
        <Variant>
          <NativeSelect
            label="Your label"
            description="Your description"
            placeholder="Your placeholder"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="disabled">
          <NativeSelect
            label="Your label"
            data={["value1", "value2", "value3"]}
            disabled
          />
        </Variant>
        <Variant name="with error">
          <NativeSelect
            label="Your label"
            data={["value1", "value2", "value3"]}
            error="Error message"
          />
        </Variant>
        <Variant name="with icon">
          <NativeSelect
            label="Your label"
            data={["value1", "value2", "value3"]}
            icon={<CheckIcon />}
          />
        </Variant>
      </Component>
      <Component
        name="NumberInput"
        docURL="https://mantine.dev/core/number-input/"
      >
        <Variant>
          <NumberInput
            label="Your label"
            description="Your description"
            placeholder="Your placeholder"
          />
        </Variant>
        <Variant name="filled">
          <NumberInput label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <NumberInput label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <NumberInput label="Your label" disabled />
        </Variant>
        <Variant name="hideControls">
          <NumberInput label="Your label" hideControls />
        </Variant>
        <Variant name="with error">
          <NumberInput label="Your label" error="Error message" />
        </Variant>
        <Variant name="with formatter">
          <NumberInput
            label="Your label"
            formatter={(value) => (value ? `$ ${value}` : "")}
          />
        </Variant>
        <Variant name="with icon">
          <NumberInput label="Your label" icon={<CheckIcon />} />
        </Variant>
      </Component>
      <Component
        name="PasswordInput"
        docURL="https://mantine.dev/core/password-input/"
      >
        <Variant>
          <PasswordInput
            label="Your label"
            description="Your description"
            placeholder="Password"
          />
        </Variant>
        <Variant name="filled">
          <PasswordInput label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <PasswordInput label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <PasswordInput label="Your label" disabled />
        </Variant>
        <Variant name="with error">
          <PasswordInput label="Your label" error="Error message" />
        </Variant>
        <Variant name="with icon">
          <PasswordInput label="Your label" icon={<CheckIcon />} />
        </Variant>
      </Component>
      <Component name="Radio" docURL="https://mantine.dev/core/radio">
        <Variant>
          <Radio value="value" label="Your label" defaultChecked />
        </Variant>
        <Variant name="with color">
          <Radio value="value" label="Your label" color="red" defaultChecked />
        </Variant>
        <Variant name="with error">
          <Radio value="value" label="Your label" error="Error message" />
        </Variant>
      </Component>
      <Component
        name="Radio.Group"
        docURL="https://mantine.dev/core/radio/#radiogroup-component"
      >
        <Variant>
          <Radio.Group label="Your label" description="Your description">
            <Radio value="value1" label="Value1" />
            <Radio value="value2" label="Value2" />
            <Radio value="value3" label="Value3" />
          </Radio.Group>
        </Variant>
        <Variant name="vertical">
          <Radio.Group label="Your label" orientation="vertical">
            <Radio value="value1" label="Value1" />
            <Radio value="value2" label="Value2" />
            <Radio value="value3" label="Value3" />
          </Radio.Group>
        </Variant>
        <Variant name="with error">
          <Radio.Group label="Your label" error="Error message">
            <Radio value="value1" label="Value1" />
            <Radio value="value2" label="Value2" />
            <Radio value="value3" label="Value3" />
          </Radio.Group>
        </Variant>
      </Component>
      <Component name="Rating" docURL="https://mantine.dev/core/rating/">
        <Variant>
          <Rating />
        </Variant>
        <Variant name="with color">
          <Rating color="red" />
        </Variant>
        <Variant name="count">
          <Rating count={3} />
        </Variant>
        <Variant name="highlightSelectedOnly">
          <Rating highlightSelectedOnly />
        </Variant>
        <Variant name="readOnly">
          <Rating value={3.5} fractions={2} readOnly />
        </Variant>
      </Component>
      <Component name="RangeSlider" docURL="https://mantine.dev/core/slider/">
        <Variant previewLayout="stretch">
          <RangeSlider
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
        <Variant name="color" previewLayout="stretch">
          <RangeSlider
            color="red"
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
        <Variant name="disabled" previewLayout="stretch">
          <RangeSlider
            disabled
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
        <Variant name="labelAlwaysOn" previewLayout="stretch" style={{paddingTop: 35, paddingLeft: 10, paddingRight: 10,}}>
          <RangeSlider
            labelAlwaysOn
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
      </Component>
      <Component
        name="SegmentedControl"
        docURL="https://mantine.dev/core/segmented-control/"
      >
        <Variant>
          <SegmentedControl
            data={[
              { label: "value1", value: "Value1", disabled: true },
              { label: "value2", value: "Value2" },
              { label: "value3", value: "Value3" },
            ]}
          />
        </Variant>
        <Variant name="fullWidth">
          <SegmentedControl fullWidth data={["value1", "value2", "value3"]} />
        </Variant>
        <Variant name="vertical">
          <SegmentedControl
            orientation="vertical"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="color">
          <SegmentedControl color="red" data={["value1", "value2", "value3"]} />
        </Variant>
      </Component>
      <Component name="Select" docURL="https://mantine.dev/core/select/">
        <Variant>
          <Select
            label="Your label"
            description="Your description"
            placeholder="Your placeholder"
            data={[
              { label: "value1", value: "Value1", disabled: true },
              { label: "value2", value: "Value2" },
              { label: "value3", value: "Value3" },
            ]}
          />
        </Variant>
        <Variant name="filled">
          <Select
            label="Your label"
            variant="filled"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="unstyled">
          <Select
            label="Your label"
            variant="unstyled"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="disabled">
          <Select
            label="Your label"
            disabled
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="itemComponent">
          <Select
            itemComponent={({ value, label, image, name, ...otherProps }) => (
              <div {...otherProps}>{label}</div>
            )}
            data={[
              {
                value: "value1",
                label: "Value1",
                image: "image1",
                name: "name1",
              },
              {
                value: "value2",
                label: "Value2",
                image: "image2",
                name: "name2",
              },
            ]}
          />
        </Variant>
        <Variant name="searchable">
          <Select
            label="Your label"
            searchable
            nothingFound="No options"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="clearable">
          <Select
            label="Your label"
            clearable
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="group items">
          <Select
            label="Your label"
            data={[
              { label: "value1", value: "Value1", group: "group1" },
              { label: "value2", value: "Value2", group: "group1" },
              { label: "value3", value: "Value3", group: "group2" },
            ]}
          />
        </Variant>
        <Variant name="with error">
          <Select
            label="Your label"
            error="Error message"
            data={["value1", "value2", "value3"]}
          />
        </Variant>
        <Variant name="with icon">
          <Select
            label="Your label"
            icon={<CheckIcon />}
            data={["value1", "value2", "value3"]}
          />
        </Variant>
      </Component>
      <Component name="Slider" docURL="https://mantine.dev/core/slider/">
        <Variant previewLayout="stretch">
          <Slider
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
        <Variant name="color" previewLayout="stretch">
          <Slider
            color="red"
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
        <Variant name="disabled" previewLayout="stretch">
          <Slider
            disabled
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
        <Variant name="labelAlwaysOn" previewLayout="stretch" style={{
          paddingTop: 35,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
          <Slider
            labelAlwaysOn
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
        </Variant>
      </Component>
      <Component name="Switch" docURL="https://mantine.dev/core/switch/">
        <Variant>
          <Switch label="I agree to sell my privacy" />
        </Variant>
        <Variant name="color">
          <Switch
            defaultChecked
            label="I agree to sell my privacy"
            color="red"
          />
        </Variant>
        <Variant name="disabled">
          <Switch label="I agree to sell my privacy" disabled />
        </Variant>
      </Component>
      <Component name="Textarea" docURL="https://mantine.dev/core/textarea/">
        <Variant>
          <Textarea
            label="Your label"
            description="Your description"
            placeholder="Your placeholder"
          />
        </Variant>
        <Variant name="filled">
          <Textarea label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <Textarea label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <Textarea label="Your label" disabled />
        </Variant>
        <Variant name="autosize">
          <Textarea label="Your label" autosize minRows={2} />
        </Variant>
        <Variant name="with error">
          <Textarea label="Your label" error="Error message" />
        </Variant>
      </Component>
      <Component name="TextInput" docURL="https://mantine.dev/core/text-input/">
        <Variant>
          <TextInput
            label="Your label"
            description="Your description"
            placeholder="Your placeholder"
          />
        </Variant>
        <Variant name="filled">
          <TextInput label="Your label" variant="filled" />
        </Variant>
        <Variant name="unstyled">
          <TextInput label="Your label" variant="unstyled" />
        </Variant>
        <Variant name="disabled">
          <TextInput label="Your label" disabled />
        </Variant>
        <Variant name="with error">
          <TextInput label="Your label" error="Error message" />
        </Variant>
        <Variant name="with icon">
          <TextInput label="Your label" icon={<CheckIcon />} />
        </Variant>
      </Component>
      <Component
        name="TransferList"
        docURL="https://mantine.dev/core/transfer-list/"
      >
        <Variant proto={TransferListProto} />
      </Component>
    </Category>
    <Category name="Navigation">
      <Component name="Anchor" docURL="https://mantine.dev/core/anchor/">
        <Variant>
          <Anchor href="https://mantine.dev/" target="_blank">
            Mantine docs
          </Anchor>
        </Variant>
        <Variant name="react-router">
          <Anchor
          // component={Link}
          // to="/react-router"
          >
            React router link
          </Anchor>
        </Variant>
      </Component>
      <Component
        name="Breadcrumbs"
        docURL="https://mantine.dev/core/breadcrumbs/"
      >
        <Variant>
          <Breadcrumbs>
            <Anchor href="#">link1</Anchor>
            <Anchor href="#">link2</Anchor>
            <Anchor href="#">link3</Anchor>
          </Breadcrumbs>
        </Variant>
      </Component>
      <Component name="Burger" docURL="https://mantine.dev/core/burger/">
        <Variant proto={BurgerProto} />
        <Variant name="color">
          <Burger opened={false} color="red" />
        </Variant>
      </Component>
      <Component name="NavLink" docURL="https://mantine.dev/core/nav-link/">
        <Variant>
          <NavLink label="Your label" active icon={<CheckIcon width={15} />} />
        </Variant>
        <Variant name="filled">
          <NavLink label="Your label" active variant="filled" />
        </Variant>
        <Variant name="subtle">
          <NavLink label="Your label" active variant="subtle" />
        </Variant>
        <Variant name="light">
          <NavLink label="Your label" variant="light" />
        </Variant>
        <Variant name="disabled">
          <NavLink label="Your label" disabled />
        </Variant>
        <Variant name="active">
          <NavLink label="Your label" active />
        </Variant>
        <Variant name="react-router" requiredParams={["to"]}>
          <NavLink
            label="Your label"
            // component={Link}
            active={location.pathname === "/url"}
          />
        </Variant>
        <Variant name="nested">
          <NavLink label="First parent link" childrenOffset={28}>
            <NavLink label="First child link" />
            <NavLink label="Second child link" />
            <NavLink label="Nested parent link" childrenOffset={28}>
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </NavLink>
        </Variant>
      </Component>
      <Component
        name="Pagination"
        docURL="https://mantine.dev/core/pagination/"
      >
        <Variant>
          <Pagination total={10} />
        </Variant>
        <Variant name="color">
          <Pagination total={10} color="red" />
        </Variant>
        <Variant name="with edges">
          <Pagination total={10} withEdges />
        </Variant>
        <Variant name="without controls">
          <Pagination total={10} withControls={false} />
        </Variant>
      </Component>
      <Component name="Stepper" docURL="https://mantine.dev/core/stepper/">
        <Variant proto={StepperProto} />
      </Component>
      <Component name="Tabs" docURL="https://mantine.dev/core/tabs/">
        <Variant>
          <Tabs defaultValue="value1">
            <Tabs.List>
              <Tabs.Tab value="value1">Tab1</Tabs.Tab>
              <Tabs.Tab value="value2">Tab2</Tabs.Tab>
              <Tabs.Tab value="value3">Tab3</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="value1" pt="xs">
              Tab1 content
            </Tabs.Panel>

            <Tabs.Panel value="value2" pt="xs">
              Tab2 content
            </Tabs.Panel>

            <Tabs.Panel value="value3" pt="xs">
              Tab3 content
            </Tabs.Panel>
          </Tabs>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Accordion" docURL="https://mantine.dev/core/accordion/">
        <Variant>
          <Accordion defaultValue="value1">
            <Accordion.Item value="value1">
              <Accordion.Control>Control1</Accordion.Control>
              <Accordion.Panel>Panel1</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="value2">
              <Accordion.Control>Control2</Accordion.Control>
              <Accordion.Panel>Panel2</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Variant>
        <Variant name="contained">
          <Accordion defaultValue="value1" variant="contained">
            <Accordion.Item value="value1">
              <Accordion.Control>Control1</Accordion.Control>
              <Accordion.Panel>Panel1</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="value2">
              <Accordion.Control>Control2</Accordion.Control>
              <Accordion.Panel>Panel2</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Variant>
        <Variant name="filled">
          <Accordion defaultValue="value1" variant="filled">
            <Accordion.Item value="value1">
              <Accordion.Control>Control1</Accordion.Control>
              <Accordion.Panel>Panel1</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="value2">
              <Accordion.Control>Control2</Accordion.Control>
              <Accordion.Panel>Panel2</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Variant>
        <Variant name="separated">
          <Accordion defaultValue="value1" variant="separated">
            <Accordion.Item value="value1">
              <Accordion.Control>Control1</Accordion.Control>
              <Accordion.Panel>Panel1</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="value2">
              <Accordion.Control>Control2</Accordion.Control>
              <Accordion.Panel>Panel2</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Variant>
      </Component>
      <Component name="Avatar" docURL="https://mantine.dev/core/avatar/">
        <Variant>
          <Avatar src="" alt="Avatar" />
        </Variant>
      </Component>
      <Component
        name="BackgroundImage"
        docURL="https://mantine.dev/core/background-image/"
      >
        <Variant>
          <BackgroundImage src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80">
            <Text color="#fff">Contend</Text>
          </BackgroundImage>
        </Variant>
      </Component>
      <Component name="Badge" docURL="https://mantine.dev/core/badge/">
        <Variant>
          <Badge>Badge</Badge>
        </Variant>
        <Variant name="filled">
          <Badge variant="filled">Badge</Badge>
        </Variant>
        <Variant name="outline">
          <Badge variant="outline">Badge</Badge>
        </Variant>
        <Variant name="dot">
          <Badge variant="dot">Badge</Badge>
        </Variant>
        <Variant name="gradient">
          <Badge variant="gradient" gradient={{ from: "red", to: "blue" }}>
            Badge
          </Badge>
        </Variant>
      </Component>
      <Component name="Card" docURL="https://mantine.dev/core/card/">
        <Variant>
          <Card withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={80}
                alt="Norway"
              />
            </Card.Section>
            <Card.Section>Content without padding</Card.Section>
            Content with padding
          </Card>
        </Variant>
      </Component>
      <Component
        name="ColorSwatch"
        docURL="https://mantine.dev/core/color-swatch/"
      >
        <Variant>
          <ColorSwatch color="red" />
        </Variant>
      </Component>
      <Component name="Image" docURL="https://mantine.dev/core/image/">
        <Variant>
          <Image
            width={200}
            height={80}
            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            alt="Your alt"
          />
        </Variant>
      </Component>
      <Component name="Indicator" docURL="https://mantine.dev/core/indicator/">
        <Variant>
          <Indicator>
            <Avatar />
          </Indicator>
        </Variant>
        <Variant name="withBorder">
          <Indicator withBorder>
            <Avatar />
          </Indicator>
        </Variant>
      </Component>
      <Component name="Kdb" docURL="https://mantine.dev/core/kbd/">
        <Variant>
          <>
            <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
          </>
        </Variant>
      </Component>
      <Component name="Spoiler" docURL="https://mantine.dev/core/spoiler/">
        <Variant>
          <Spoiler maxHeight={20} showLabel="Show more" hideLabel="Hide">
            Content here
            <div>Hidden content</div>
          </Spoiler>
        </Variant>
      </Component>
      <Component name="ThemeIcon" docURL="https://mantine.dev/core/theme-icon/">
        <Variant>
          <ThemeIcon color="red">
            <CheckIcon />
          </ThemeIcon>
        </Variant>
        <Variant name="light">
          <ThemeIcon variant="light">
            <CheckIcon />
          </ThemeIcon>
        </Variant>
        <Variant name="filled">
          <ThemeIcon variant="filled">
            <CheckIcon />
          </ThemeIcon>
        </Variant>
        <Variant name="gradient">
          <ThemeIcon variant="gradient" gradient={{ from: "blue", to: "red" }}>
            <CheckIcon />
          </ThemeIcon>
        </Variant>
      </Component>
      <Component name="Timeline" docURL="https://mantine.dev/core/timeline/">
        <Variant>
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="Point1" bullet={<CheckIcon />}>
              Text
            </Timeline.Item>
            <Timeline.Item title="Point2" bullet={<CheckIcon />}>
              Text
            </Timeline.Item>
            <Timeline.Item
              title="Point3"
              bullet={<CheckIcon />}
              lineVariant="dashed"
            >
              Text
            </Timeline.Item>
            <Timeline.Item title="Point4" bullet={<CheckIcon />}>
              Text
            </Timeline.Item>
          </Timeline>
        </Variant>
      </Component>
    </Category>
    <Category name="Overlays">
      <Component name="Affix" docURL="https://mantine.dev/core/affix/">
        <Variant>
          <Affix position={{ bottom: 20, right: 20 }}>Content</Affix>
        </Variant>
      </Component>
      <Component name="Dialog" docURL="https://mantine.dev/core/dialog/">
        <Variant proto={DialogProto} />
      </Component>
      <Component name="Drawer" docURL="https://mantine.dev/core/drawer/">
        <Variant proto={DrawerProto} />
      </Component>
      <Component name="HoverCard" docURL="https://mantine.dev/core/hover-card/">
        <Variant>
          <HoverCard width={300} withArrow openDelay={200} closeDelay={400}>
            <HoverCard.Target>
              <div>Hover</div>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <div>
                <div>Content</div>
                <Button>Button inside HoverCard</Button>
              </div>
            </HoverCard.Dropdown>
          </HoverCard>
        </Variant>
      </Component>
      <Component
        name="LoadingOverlay"
        docURL="https://mantine.dev/core/loading-overlay/"
      >
        <Variant>
          {/* Note that position: relative is required */}
          <div style={{ width: 400, height: 200, position: "relative" }}>
            <LoadingOverlay visible={true} overlayBlur={2} />
            Content
          </div>
        </Variant>
      </Component>
      <Component name="Menu" docURL="https://mantine.dev/core/menu/">
        <Variant>
          <Menu shadow="md" width={200} withArrow>
            <Menu.Target>
              <Button>Toggle menu</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Label</Menu.Label>
              <Menu.Item>Item</Menu.Item>
              <Menu.Item icon={<CheckIcon width={15} />}>Item</Menu.Item>
              <Menu.Item
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Item
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Label</Menu.Label>
              <Menu.Item color="red">Label</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Variant>
      </Component>
      <Component name="Modal" docURL="https://mantine.dev/core/modal/">
        <Variant proto={ModalProto} />
        <Variant name="centered" proto={ModalCenteredProto} />
        <Variant name="fullScreen" proto={ModalFullScreenProto} />
      </Component>
      <Component name="Overlay" docURL="https://mantine.dev/core/overlay/">
        <Variant>
          <div
            style={{
              width: 200,
              height: 100,
              position: "relative",
            }}
          >
            <Overlay opacity={0.6} color="#000" zIndex={5} />
            Content
          </div>
        </Variant>
        <Variant name="blur">
          <div
            style={{
              width: 200,
              height: 100,
              position: "relative",
            }}
          >
            <Overlay opacity={0.6} color="#000" blur={2} />
            Content
          </div>
        </Variant>
      </Component>
      <Component name="Popover" docURL="https://mantine.dev/core/popover/">
        <Variant>
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>Content</Popover.Dropdown>
          </Popover>
        </Variant>
        <Variant name="width target">
          <Popover width="target" position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button sx={{ width: 280 }}>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>Content</Popover.Dropdown>
          </Popover>
        </Variant>
        <Variant name="trapFocus">
          <Popover
            width={300}
            trapFocus
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <TextInput label="Name" placeholder="Name" size="xs" />
              <TextInput
                label="Email"
                placeholder="john@doe.com"
                size="xs"
                mt="xs"
              />
            </Popover.Dropdown>
          </Popover>
        </Variant>
      </Component>
      <Component name="Tooltip" docURL="https://mantine.dev/core/tooltip/">
        <Variant>
          <Tooltip label="Tooltip" withArrow>
            <Button>Hover</Button>
          </Tooltip>
        </Variant>
        <Variant name="Floating">
          <Tooltip.Floating label="Tooltip">
            <Button>Hover</Button>
          </Tooltip.Floating>
        </Variant>
      </Component>
    </Category>
    <Category name="Typography">
      <Component
        name="Blockquote"
        docURL="https://mantine.dev/core/blockquote/"
      >
        <Variant>
          <Blockquote cite="Author">Quote</Blockquote>
        </Variant>
      </Component>
      <Component name="Code" docURL="https://mantine.dev/core/code/">
        <Variant>
          <Code>Code</Code>
        </Variant>
        <Variant name="block">
          <Code block>Block of code</Code>
        </Variant>
      </Component>
      <Component name="Highlight" docURL="https://mantine.dev/core/highlight/">
        <Variant>
          <Highlight highlight="this">
            Highlight This, definitely THIS and also this!
          </Highlight>
        </Variant>
        <Variant name="multiple">
          <Highlight highlight={["this", "that"]}>
            Highlight this and also that
          </Highlight>
        </Variant>
        <Variant name="highlightColor">
          <Highlight highlight="this" highlightColor="red">
            Highlight This, definitely THIS and also this!
          </Highlight>
        </Variant>
      </Component>
      <Component name="List" docURL="https://mantine.dev/core/list/">
        <Variant>
          <List>
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
          </List>
        </Variant>
        <Variant name="ordered">
          <List type="ordered">
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
          </List>
        </Variant>
        <Variant name="withPadding">
          <List withPadding>
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
            <List.Item>Item</List.Item>
          </List>
        </Variant>
      </Component>
      <Component name="Mark" docURL="https://mantine.dev/core/mark/">
        <Variant>
          <Text>
            Text <Mark>Marked text</Mark> Text
          </Text>
        </Variant>
        <Variant name="color">
          <Text>
            Text <Mark color="red">Marked text</Mark> Text
          </Text>
        </Variant>
      </Component>
      <Component name="Table" docURL="https://mantine.dev/core/table/">
        <Variant>
          <Table>
            <caption>Caption</caption>
            <thead>
              <tr>
                <th>Element 1</th>
                <th>Element 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Element 1</th>
                <th>Element 2</th>
              </tr>
            </tfoot>
          </Table>
        </Variant>
        <Variant name="striped">
          <Table striped>
            <tbody>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
            </tbody>
          </Table>
        </Variant>
        <Variant name="highlightOnHover">
          <Table highlightOnHover>
            <tbody>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
              <tr>
                <td>Element 1</td>
                <td>Element 2</td>
              </tr>
            </tbody>
          </Table>
        </Variant>
      </Component>
      <Component name="Text" docURL="https://mantine.dev/core/text/">
        <Variant>
          <Text>Text</Text>
        </Variant>
        <Variant name="Semibold">
          <Text weight={500}>Semibold</Text>
        </Variant>
        <Variant name="Bold">
          <Text weight={700}>Bold</Text>
        </Variant>
        <Variant name="italic">
          <Text italic>Italic</Text>
        </Variant>
        <Variant name="underline">
          <Text underline>Underlined</Text>
        </Variant>
        <Variant name="strikethrough">
          <Text strikethrough>Strikethrough</Text>
        </Variant>
        <Variant name="link">
          <Text variant="link" component="a" href="#">
            Link variant
          </Text>
        </Variant>
        <Variant name="uppercase">
          <Text transform="uppercase">Uppercase</Text>
        </Variant>
        <Variant name="capitalize">
          <Text transform="capitalize">capitalized text</Text>
        </Variant>
        <Variant name="center">
          <Text align="center">Aligned to center</Text>
        </Variant>
        <Variant name="right">
          <Text align="right">Aligned to right</Text>
        </Variant>
        <Variant name="dimmed">
          <Text color="dimmed">Dimmed text</Text>
        </Variant>
        <Variant name="gradient">
          <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          >
            Text with gradient
          </Text>
        </Variant>
        <Variant name="lineClamp">
          <Text lineClamp={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Variant>
      </Component>
      <Component name="Title" docURL="https://mantine.dev/core/title/">
        <Variant name="order 1">
          <Title order={1}>This is h1 title</Title>
        </Variant>
        <Variant name="order 2">
          <Title order={2}>This is h2 title</Title>
        </Variant>
        <Variant name="order 3">
          <Title order={3}>This is h3 title</Title>
        </Variant>
        <Variant name="order 4">
          <Title order={4}>This is h4 title</Title>
        </Variant>
        <Variant name="order 5">
          <Title order={5}>This is h5 title</Title>
        </Variant>
        <Variant name="order 6">
          <Title order={6}>This is h6 title</Title>
        </Variant>
        <Variant name="with text props">
          <Title order={5} color="dimmed" underline italic align="center">
            Support all text props
          </Title>
        </Variant>
      </Component>
      <Component name="TypographyStylesProvider">
        <Variant>
          <TypographyStylesProvider>
            <div
              dangerouslySetInnerHTML={{ __html: "<p>Your html here</p>" }}
            />
          </TypographyStylesProvider>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert" docURL="https://mantine.dev/core/alert/">
        <Variant>
          <Alert icon={<CheckIcon />} title="Your title">
            Content
          </Alert>
        </Variant>
        <Variant name="color">
          <Alert icon={<CheckIcon />} title="Your title" color="red">
            Content
          </Alert>
        </Variant>
        <Variant name="withCloseButton">
          <Alert icon={<CheckIcon />} title="Your title" withCloseButton>
            Content
          </Alert>
        </Variant>
        <Variant name="filled">
          <Alert icon={<CheckIcon />} title="Your title" variant="filled">
            Content
          </Alert>
        </Variant>
        <Variant name="outline">
          <Alert icon={<CheckIcon />} title="Your title" variant="outline">
            Content
          </Alert>
        </Variant>
      </Component>
      <Component name="Loader" docURL="https://mantine.dev/core/loader/">
        <Variant>
          <Loader />
        </Variant>
        <Variant name="color">
          <Loader color="red" />
        </Variant>
        <Variant name="bars">
          <Loader variant="bars" />
        </Variant>
        <Variant name="dots">
          <Loader variant="dots" />
        </Variant>
      </Component>
      <Component
        name="Notification"
        docURL="https://mantine.dev/core/notification/"
      >
        <Variant>
          <Notification title="Your title">Content</Notification>
        </Variant>
        <Variant name="loading">
          <Notification title="Your title" loading>
            Content
          </Notification>
        </Variant>
        <Variant name="disallowClose">
          <Notification title="Your title" disallowClose>
            Content
          </Notification>
        </Variant>
      </Component>
      <Component name="Progress" docURL="https://mantine.dev/core/progress/">
        <Variant>
          <Progress value={50} style={{ width: "100%" }} />
        </Variant>
        <Variant name="striped">
          <Progress value={50} striped style={{ width: "100%" }} />
        </Variant>
        <Variant name="animate">
          <Progress value={50} animate style={{ width: "100%" }} />
        </Variant>
        <Variant name="sections">
          <Progress
            sections={[
              {
                value: 25,
                color: "pink",
                label: "Label1",
                tooltip: "Tooltip1",
              },
              {
                value: 25,
                color: "grape",
                label: "Label2",
                tooltip: "Tooltip2",
              },
              {
                value: 25,
                color: "violet",
                label: "Label3",
                tooltip: "Tooltip3",
              },
            ]}
            size={24}
            style={{ width: "100%" }}
          />
        </Variant>
      </Component>
      <Component
        name="RingProgress"
        docURL="https://mantine.dev/core/ring-progress/"
      >
        <Variant>
          <RingProgress
            label="Your label"
            sections={[
              { value: 40, color: "cyan", tooltip: "tooltip1" },
              { value: 15, color: "orange", tooltip: "tooltip2" },
              { value: 15, color: "grape", tooltip: "tooltip3" },
            ]}
          />
        </Variant>
        <Variant name="roundCaps">
          <RingProgress
            label="Your label"
            roundCaps
            sections={[
              { value: 40, color: "cyan" },
              { value: 15, color: "orange" },
              { value: 15, color: "grape" },
            ]}
          />
        </Variant>
      </Component>
      <Component name="Skeleton" docURL="https://mantine.dev/core/skeleton/">
        <Variant>
          <Skeleton height={10} />
        </Variant>
        <Variant name="circle">
          <Skeleton height={50} circle />
        </Variant>
        <Variant name="without animation">
          <Skeleton height={10} animate={false} />
        </Variant>
        <Variant name="with content" proto={SkeletonProto} />
      </Component>
    </Category>
    <Category name="Miscellaneous">
      <Component name="Box" docURL="https://mantine.dev/core/box/">
        <Variant>
          <Box sx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}>
            Content
          </Box>
        </Variant>
      </Component>
      <Component name="Collapse" docURL="https://mantine.dev/core/collapse/">
        <Variant proto={CollapseProto} />
      </Component>
      <Component name="Divider" docURL="https://mantine.dev/core/divider/">
        <Variant>
          <Divider my="sm" style={{ width: "100%" }} />
        </Variant>
        <Variant name="dashed">
          <Divider my="sm" variant="dashed" style={{ width: "100%" }} />
        </Variant>
        <Variant name="dotted">
          <Divider my="sm" variant="dotted" style={{ width: "100%" }} />
        </Variant>
        <Variant name="label left">
          <Divider
            my="xs"
            label="Label on the left"
            style={{ width: "100%" }}
          />
        </Variant>
        <Variant name="label center">
          <Divider
            my="xs"
            label="Label in the center"
            labelPosition="center"
            style={{ width: "100%" }}
          />
        </Variant>
        <Variant name="label right">
          <Divider
            my="xs"
            label="Label on the right"
            labelPosition="right"
            style={{ width: "100%" }}
          />
        </Variant>
        <Variant name="vertical">
          <Divider orientation="vertical" />
        </Variant>
      </Component>
      <Component name="FocusTrap" docURL="https://mantine.dev/core/focus-trap/">
        <Variant proto={FocusTrapProto} />
      </Component>
      <Component name="Paper" docURL="https://mantine.dev/core/paper/">
        <Variant>
          <Paper shadow="xs" p="md">
            Content
          </Paper>
        </Variant>
        <Variant name="withBorder">
          <Paper shadow="xs" p="md" withBorder>
            Content
          </Paper>
        </Variant>
      </Component>
      <Component name="Portal">
        <Variant proto={PortalProto} />
      </Component>
      <Component
        name="ScrollArea"
        docURL="https://mantine.dev/core/scroll-area/"
      >
        <Variant>
          <ScrollArea style={{ height: 80 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ScrollArea>
        </Variant>
        <Variant name="offsetScrollbars">
          <ScrollArea style={{ height: 80 }} offsetScrollbars>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ScrollArea>
        </Variant>
        <Variant name="Autosize">
          <ScrollArea.Autosize maxHeight={100} sx={{ maxWidth: 200 }} mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ScrollArea.Autosize>
        </Variant>
      </Component>
      <Component
        name="Transition"
        docURL="https://mantine.dev/core/transition/"
      >
        <Variant proto={TransitionProto} />
        <Variant name="hover demo" proto={TransitionHoverDemoProto} />
      </Component>
    </Category>
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

  const handleError = (errors: typeof form.errors) => {};

  const handleSubmit = (values: typeof form.values) => {};

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
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
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

function TransferListProto() {
  const [data, setData] = useState<TransferListData>([
    [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
      { value: "next", label: "Next.js" },
      { value: "blitz", label: "Blitz.js" },
      { value: "gatsby", label: "Gatsby.js" },
      { value: "vue", label: "Vue" },
      { value: "jq", label: "jQuery" },
    ],
    [
      { value: "sv", label: "Svelte" },
      { value: "rw", label: "Redwood" },
      { value: "np", label: "NumPy" },
      { value: "dj", label: "Django" },
      { value: "fl", label: "Flask" },
    ],
  ]);

  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={["Frameworks", "Libraries"]}
      breakpoint="sm"
    />
  );
}

function BurgerProto() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close" : "Open";

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
  );
}

function FileButtonProto() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <FileButton onChange={setFile} accept="image/png,image/jpeg">
      {(props) => <Button {...props}>Upload image</Button>}
    </FileButton>
  );
}

function FileButtonMultipleProto() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
      {(props) => <Button {...props}>Upload image</Button>}
    </FileButton>
  );
}

function TransitionProto(
  transition:
    | "fade"
    | "skew-up"
    | "skew-down"
    | "rotate-right"
    | "rotate-left"
    | "slide-down"
    | "slide-up"
    | "slide-right"
    | "slide-left"
    | "scale-y"
    | "scale-x"
    | "scale"
    | "pop"
    | "pop-top-left"
    | "pop-top-right"
    | "pop-bottom-left"
    | "pop-bottom-right"
) {
  const [opened, setOpened] = useState(false);

  return (
    <Transition mounted={opened} transition={transition} duration={400}>
      {(styles) => <div style={styles}>Content</div>}
    </Transition>
  );
}

function TransitionHoverDemoProto(
  transition:
    | "fade"
    | "skew-up"
    | "skew-down"
    | "rotate-right"
    | "rotate-left"
    | "slide-down"
    | "slide-up"
    | "slide-right"
    | "slide-left"
    | "scale-y"
    | "scale-x"
    | "scale"
    | "pop"
    | "pop-top-left"
    | "pop-top-right"
    | "pop-bottom-left"
    | "pop-bottom-right"
) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Badge
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
      >
        {transition}
      </Badge>
      <Transition mounted={opened} transition={transition} duration={400}>
        {(styles) => (
          <Paper
            shadow="md"
            style={{
              ...styles,
              position: "absolute",
              bottom: 0,
              transform: "translateY(100%)",
            }}
          >
            {transition}
          </Paper>
        )}
      </Transition>
    </div>
  );
}

function CollapseProto() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened((o) => !o)}>Toggle content</Button>

      <Collapse in={opened}>Content</Collapse>
    </>
  );
}

function SkeletonProto() {
  const [loading, setLoading] = useState(true);

  return <Skeleton visible={loading}>Content</Skeleton>;
}

function StepperProto() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Your description">
          Step 1 content
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Your description"
          loading
        >
          Step 2 content
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Your description">
          Step 3 content
        </Stepper.Step>
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

function FocusTrapProto() {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive(!active), [setActive]);

  return (
    <>
      <Button onClick={toggleActive}>
        {active ? "Deactivate" : "Activate"} focus trap
      </Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </>
  );
}

function ModalProto() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Your title"
      >
        Content
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

function ModalCenteredProto() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Your title"
        centered
      >
        Content
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open centered Modal</Button>
      </Group>
    </>
  );
}

function ModalFullScreenProto() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Your title"
        fullScreen
      >
        Content
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open fullScreen Modal</Button>
      </Group>
    </>
  );
}

function DialogProto() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Dialog opened={opened} withCloseButton onClose={() => setOpened(false)}>
        Content
      </Dialog>
      <Button onClick={() => setOpened(true)}>Open Dialog</Button>
    </>
  );
}

function DrawerProto() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        title="Your title"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        Content
      </Drawer>
      <Button onClick={() => setOpened(true)}>Open Drawer</Button>
    </>
  );
}

function PortalProto() {
  const [opened, setOpened] = useState(false);

  return (
      <div style={{ position: 'relative', zIndex: 1 }}>
        {opened && (
            <Portal>
              <div>Your modal content</div>
            </Portal>
        )}

        <button onClick={() => setOpened(true)} type="button">
          Open modal
        </button>
      </div>
  );
}
