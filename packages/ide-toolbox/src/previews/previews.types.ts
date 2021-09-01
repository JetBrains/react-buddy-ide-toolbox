export enum PropsControlTypes {
  Checkbox = 'checkbox',
  Input = "input",
  Radio = "radio",
  Select = "select",
  Textarea = "textarea",
  JsonEditor = 'jsonEditor'
}

export type ControlInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type ControlSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => void;
export type ControlTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
export type ControlJsonHandler = (propName: string, propValue: string) => void;
export type ControlUnionHandler =
  | ControlInputHandler
  | ControlSelectHandler
  | ControlTextareaHandler
  | ControlJsonHandler


type PropEditSelect = {
  controlType: PropsControlTypes.Select,
  data?: string[] | number[]
}

type PropEditInput = {
  controlType: PropsControlTypes.Input,
  data?: string | number
}

type PropEditRadio = {
  controlType: PropsControlTypes.Radio,
  data?: string[] | number[]
}

type PropEditTextarea = {
  controlType: PropsControlTypes.Textarea,
  data?: string | number
}

type PropEditCheckbox = {
  controlType: PropsControlTypes.Checkbox,
  data?: boolean
}

type PropEditJson = {
  controlType: PropsControlTypes.JsonEditor,
  data?: ComponentPreviewProps
}

type PropsEditItem = 
  | PropEditInput
  | PropEditTextarea
  | PropEditSelect
  | PropEditRadio
  | PropEditCheckbox
  | PropEditJson

export type TableItemControlData = number[] | string[] | ComponentPreviewProps

export type ComponentPreviewProps = {
  [propsName: string]: any
} | null;

export type ToolsPropsModifier = {
  initialProps?: ComponentPreviewProps,
  props?: ComponentPreviewProps,
  propsEditInfo?: PropsEditInfo,
  updateProps?: (updatedProps: ComponentPreviewProps) => void,
} | null;

export type PropsModifier = {
  props: ComponentPreviewProps,
  updateProps: (updatedProps: ComponentPreviewProps) => void
} | null

export type PropsEditInfo = {
  [propsName: string]: PropsEditItem
}
