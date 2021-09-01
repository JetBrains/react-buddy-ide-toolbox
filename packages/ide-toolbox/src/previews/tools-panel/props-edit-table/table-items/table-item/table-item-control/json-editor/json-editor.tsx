import React, { useState, useCallback, useMemo } from "react";
import { ControlJsonHandler } from "../../../../../../previews.types";
import Textarea from "../textarea";
import "./json-editor.scss";

interface Props {
  className?: string
  propValue: string;
  propName: string;
  propUpdate: ControlJsonHandler,
}

export const JsonEditor: React.FC<Props> = ({ className, propName, propValue, propUpdate, }) => {
  const [editedJsonValue, setEditedJsonValue] = useState<string>();

  const textareaOnChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { currentTarget: { value } } = event;
    setEditedJsonValue(value);
  }, []);

  const isEnabledToApply = useMemo(() => {
    return editedJsonValue == null;
  }, [editedJsonValue])

  const onPropUpdate = useCallback(() => {
    propUpdate(propName, editedJsonValue!);
    setEditedJsonValue(undefined);
  }, [propName, editedJsonValue])

  return (
    <div className={className + " json-editor"}>
      <Textarea
        className={"json-editor-textarea"}
        onChange={textareaOnChange}
        id={propName}
        value={editedJsonValue ?? propValue}
      />
      <button
        className={"json-editor-apply-button"}
        disabled={isEnabledToApply}
        onClick={onPropUpdate}
      >
        Apply changes
      </button>
    </div>
  )
}
