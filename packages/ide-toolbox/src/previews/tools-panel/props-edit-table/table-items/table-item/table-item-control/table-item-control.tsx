import React from "react";
import {
  PropsControlTypes,
  ControlUnionHandler,
  ControlInputHandler,
  ControlSelectHandler,
  ControlTextareaHandler,
  ControlJsonHandler,
  TableItemControlData
} from "../../../../../previews.types"

import Input from "./input";
import Checkbox from "./checkbox";
import Select from "./select";
import Radio from "./radio";
import Textarea from "./textarea";
import JsonEditor from "./json-editor"

interface Props {
  controlType?: PropsControlTypes;
  data?: TableItemControlData;
  propName: string;
  propValue: any;
  onPropChange: ControlUnionHandler
}

export const TableItemControl: React.FC<Props> = ({ controlType, data, propName, propValue, onPropChange }) => {
  switch (controlType) {
    case PropsControlTypes.Input:
      return (
        <Input
          className={"table-item-control"}
          id={propName}
          value={propValue}
          onChange={onPropChange as ControlInputHandler}
        />
      )

    case PropsControlTypes.Textarea:
      return (
        <Textarea
          className={"table-item-control"}
          id={propName}
          value={propValue}
          onChange={onPropChange as ControlTextareaHandler}
        />
      )
    case PropsControlTypes.Select:
      return (
        <Select
          className={"table-item-control"}
          id={propName}
          onChange={onPropChange as ControlSelectHandler}
          optionsData={data as (string[] | number[])}
        />
      )

    case PropsControlTypes.Checkbox:
      return (
        <Checkbox
          checked={propValue}
          id={propName}
          onChange={onPropChange as ControlInputHandler}
        />
      )

    case PropsControlTypes.Radio:
      return (
        <Radio
          className={"table-item-control"}
          extValue = {propValue}
          name={propName}
          onChange={onPropChange as ControlInputHandler}
          radioData={data as (string[] | number[])}
        />
      )

    case PropsControlTypes.JsonEditor:
      return (
        <JsonEditor
          className={"table-item-control"}
          propValue = {propValue}
          propName={propName}
          propUpdate={onPropChange as ControlJsonHandler}
        />
      )

    default:
      return (
        <Input
          className={"table-item-control"}
          id={propName}
          value={propValue}
          onChange={onPropChange as ControlInputHandler}
        />
      )
  }
};
