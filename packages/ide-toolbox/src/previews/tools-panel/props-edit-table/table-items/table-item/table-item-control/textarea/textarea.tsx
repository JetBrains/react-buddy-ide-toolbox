import React from "react";

export const Textarea: React.FC<React.HTMLProps<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea
    {...props}
    />
  )
}
