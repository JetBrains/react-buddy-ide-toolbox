export const classnames = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
};