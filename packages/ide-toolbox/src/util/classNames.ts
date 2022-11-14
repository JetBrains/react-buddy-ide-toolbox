export function classNames(...classNames: (string | undefined | null)[]) {
  const splittedClassNamesWithoutNullable = classNames.flatMap(className => className ? className.split(' ') : []);
  const uniqClassNames = [...new Set(splittedClassNamesWithoutNullable)];
  return uniqClassNames.join(' ');
};