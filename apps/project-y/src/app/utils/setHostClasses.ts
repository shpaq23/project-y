import { DOMManipulator } from './DOMManipulator';

export function setHostClasses(
  ...hostClasses: Array<string | Array<string>>
): void {
  const domManipulator = new DOMManipulator();
  const hostClassesArray = toArray(hostClasses);

  if (hostClasses?.length) {
    domManipulator.addHostClass(...hostClassesArray);
  }
}

function toArray(hostClasses: Array<string | Array<string>>): Array<string> {
  return hostClasses.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return [...acc, ...val];
    }
    return [...acc, val];
  }, []) as Array<string>;
}
