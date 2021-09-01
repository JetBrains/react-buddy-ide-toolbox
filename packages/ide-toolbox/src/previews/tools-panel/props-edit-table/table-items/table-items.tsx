import React, { useCallback, useEffect } from "react";
import {
  ToolsPropsModifier,
  PropsControlTypes,
  TableItemControlData
} from "../../../previews.types";
import TableItem from "./table-item"
import "./table-items.scss";

interface Props {
  toolsPropsToEdit: ToolsPropsModifier
}

export const TableItems: React.FC<Props> = ({ toolsPropsToEdit }) => {
  const { props = null, initialProps = null, propsEditInfo = null, updateProps } = { ...toolsPropsToEdit };

  useEffect(() => {
    let propsValuesFromData = {}

    propsEditInfo
      ? Object.entries(propsEditInfo).map(([propName, propEditInfo]) => {
        const propValue = Array.isArray(propEditInfo.data)
          ? propEditInfo.data[0]
          : propEditInfo.data

        propsValuesFromData = {
          ...propsValuesFromData,
          [propName]: propValue
        }
      })
      : null;

    updateProps?.({
      ...props,
      ...propsValuesFromData
    })
  }, [propsEditInfo])

  const onInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: updatedPropValue, id: propName } = event.currentTarget;
    const updatedProps = {
      ...props,
      [propName]: updatedPropValue
    };

    updateProps!(updatedProps);

  }, [props]);

  const onCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked: updatedPropValue, id: propName } = event.currentTarget;
    const updatedProps = {
      ...props,
      [propName]: updatedPropValue
    };

    updateProps!(updatedProps);

  }, [props]);

  const onSelectChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: updatedPropValue, id: propName } = event.currentTarget;
    const updatedProps = {
      ...props,
      [propName]: updatedPropValue
    };

    updateProps!(updatedProps);

  }, [props]);

  const onRadioChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: updatedPropValue, name: propName } = event.currentTarget;
    const updatedProps = {
      ...props,
      [propName]: updatedPropValue
    };

    updateProps!(updatedProps);

  }, [props]);

  const onTextAreaChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: updatedPropValue, id: propName } = event.currentTarget;
    const updatedProps = {
      ...props,
      [propName]: updatedPropValue
    };

    updateProps!(updatedProps);

  }, [props]);

  const onJsonChange = useCallback((propName: string, propValue: string) => {
    let updatedPropValue;

    try {
      updatedPropValue = JSON.parse(propValue);
    } catch (e) {
      alert(`Property ${propName} has incorrect value to object parse`);
      return;
    }
    const updatedProps = {
      ...props,
      [propName]: updatedPropValue
    };

    updateProps!(updatedProps);

  }, [props]);

  const getChangeHendler = useCallback((controlType?: PropsControlTypes) => {
    switch (controlType) {
      case PropsControlTypes.Input:
        return onInputChange;
      case PropsControlTypes.Checkbox:
        return onCheckboxChange;
      case PropsControlTypes.Select:
        return onSelectChange;
      case PropsControlTypes.Radio:
        return onRadioChange;
      case PropsControlTypes.Textarea:
        return onTextAreaChange;
      case PropsControlTypes.JsonEditor:
        return onJsonChange;
      default: return onInputChange;
    }
  }, [props])

  const renderTableItems = useCallback((
  ) => {
    let items: JSX.Element[] = [];

    const itemsWithoutInfo = props && Object.entries(props)
      .filter(([propName]) => {
        return !propsEditInfo?.hasOwnProperty(propName);
      })
      .map(([propName, propValue]) => {
        return (
          <TableItem
            key={propName}
            propName={propName}
            propValue={propValue}
            initialPropValue={initialProps?.[propName]}
            onPropChange={getChangeHendler()}
          />
        )
      })

    items = itemsWithoutInfo ? [...items, ...itemsWithoutInfo] : items;

    const itemsWithInfo = propsEditInfo && Object.entries(propsEditInfo)
      .map(([propName, propInfo]) => {
        return (
          <TableItem
            key={propName}
            data={(propInfo.data as TableItemControlData)}
            controlType={propInfo.controlType}
            propName={propName}
            propValue={
              propInfo.controlType === PropsControlTypes.JsonEditor
                ? JSON.stringify(props?.[propName], null, 2)
                : props?.[propName]
            }
            initialPropValue={initialProps?.[propName]}
            onPropChange={getChangeHendler(propInfo.controlType)}
          />
        )
      })

    items = itemsWithInfo ? [...items, ...itemsWithInfo] : items;

    return items;
  }, [props, propsEditInfo])


  return (
    <div className={"table-items"}>
      {renderTableItems()}
    </div>
  );
};
