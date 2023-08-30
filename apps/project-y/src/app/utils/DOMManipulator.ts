import { ElementRef, inject, Renderer2 } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { FromEventTarget } from './FromEventTarget';

export class DOMManipulator {
  protected nativeElement: HTMLElement;

  private readonly elementRef: ElementRef;
  private readonly renderer: Renderer2;

  constructor() {
    this.elementRef = inject(ElementRef);
    this.renderer = inject(Renderer2);
    this.nativeElement = this.elementRef.nativeElement;
  }

  addHostClass(...classNames: Array<string>): void {
    this.addClasses(this.nativeElement, classNames);
  }

  addClass(nativeElement: HTMLElement, ...classNames: Array<string>): void {
    this.addClasses(nativeElement, classNames);
  }

  removeHostClass(...classNames: Array<string>): void {
    this.removeClasses(this.nativeElement, classNames);
  }

  removeClass(nativeElement: HTMLElement, ...classNames: Array<string>): void {
    this.removeClasses(nativeElement, classNames);
  }

  clearHostClass(): void {
    this.renderer.removeAttribute(this.nativeElement, 'class');
  }

  clearClass(nativeElement: HTMLElement): void {
    this.renderer.removeAttribute(nativeElement, 'class');
  }

  addHostStyle(name: string, value: string): void {
    this.renderer.setStyle(this.nativeElement, name, value);
  }

  addStyle(nativeElement: HTMLElement, name: string, value: string): void {
    this.renderer.setStyle(nativeElement, name, value);
  }

  removeHostStyle(name: string): void {
    this.renderer.removeStyle(this.nativeElement, name);
  }

  removeStyle(nativeElement: HTMLElement, name: string): void {
    this.renderer.removeStyle(nativeElement, name);
  }

  clearHostStyle(): void {
    this.renderer.removeAttribute(this.nativeElement, 'style');
  }

  clearStyle(nativeElement: HTMLElement): void {
    this.renderer.removeAttribute(nativeElement, 'style');
  }

  setHostAttribute(name: string, value: string): void {
    this.renderer.setAttribute(this.nativeElement, name, value);
  }

  getHostDataAttribute(name: string): string {
    // @ts-ignore
    return this.nativeElement.dataset[name];
  }

  setAttribute(nativeElement: HTMLElement, name: string, value: string): void {
    this.renderer.setAttribute(nativeElement, name, value);
  }

  removeHostAttribute(name: string): void {
    this.renderer.removeAttribute(this.nativeElement, name);
  }

  removeAttribute(nativeElement: HTMLElement, name: string): void {
    this.renderer.removeAttribute(nativeElement, name);
  }

  hostListen<E extends keyof GlobalEventHandlersEventMap>(
    eventName: E
  ): Observable<EventWith<GlobalEventHandlersEventMap[E], HTMLElement>>;
  hostListen<T extends Event>(eventName: string): Observable<T>;
  hostListen<T extends Event>(eventName: string): Observable<T> {
    return fromEvent<T>(this.nativeElement, eventName);
  }

  listen<
    E extends keyof GlobalEventHandlersEventMap,
    T extends FromEventTarget<EventWith<GlobalEventHandlersEventMap[E], T>>
  >(
    nativeElement: T,
    eventName: E
  ): Observable<EventWith<GlobalEventHandlersEventMap[E], T>>;
  listen<E extends keyof WindowEventHandlersEventMap>(
    nativeElement: Window,
    eventName: E
  ): Observable<EventWith<WindowEventHandlersEventMap[E], Window>>;
  listen<T extends Event>(
    nativeElement: HTMLElement | Window | Document,
    eventName: string
  ): Observable<T>;
  listen<T extends Event>(
    nativeElement: HTMLElement | Window | Document,
    eventName: string
  ): Observable<T> {
    return fromEvent<T>(nativeElement, eventName);
  }

  getNativeElement(): HTMLElement {
    return this.nativeElement;
  }

  private addClasses(element: HTMLElement, classes: Array<string>): void {
    element.classList &&
      element.classList.add(
        ...classes
          .filter(Boolean)
          .map((c) => c.split(' '))
          .reduce(
            (previousValue, currentValue) => [
              ...previousValue,
              ...currentValue,
            ],
            []
          )
      );
  }

  private removeClasses(element: HTMLElement, classes: Array<string>): void {
    element.classList.remove(
      ...classes
        .filter(Boolean)
        .map((c) => c.split(' '))
        .reduce(
          (previousValue, currentValue) => [...previousValue, ...currentValue],
          []
        )
    );
  }
}

export type EventWith<E extends Event, T extends FromEventTarget<E>> = E & {
  readonly currentTarget: T;
};
