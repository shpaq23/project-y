interface HasEventTargetAddRemove<E> {
  addEventListener(
    type: string,
    listener: ((evt: E) => void) | null,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener?: ((evt: E) => void) | null,
    options?: EventListenerOptions | boolean
  ): void;
}
export type FromEventTarget<T> =
  | HasEventTargetAddRemove<T>
  | ArrayLike<HasEventTargetAddRemove<T>>;
