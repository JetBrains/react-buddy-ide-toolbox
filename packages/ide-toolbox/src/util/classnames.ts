export function classNames(...classNames: (string | undefined | null)[]) {
  const splittedClassNamesWIthoutNullable = classNames.flatMap(className => className ? className.split(' ') : []);
  const uniqClassNames = [...new Set(splittedClassNamesWIthoutNullable)];
  return uniqClassNames.join(' ');
};