import { SimpleChanges } from '@angular/core';

// IMPORTANT: after location or name refactor also refactor eslint rule: src/util/eslint/lib/rules/ng-changes.js
type MarkFunctionProperties<Component> = {
	[Key in keyof Component]: Component[Key] extends Function ? never : Key;
};

type ExcludeFunctionPropertyNames<T> = MarkFunctionProperties<T>[keyof T];

export type ExcludeFunctions<T> = Pick<T, ExcludeFunctionPropertyNames<T>>;

// TODO "previousValue" & "currentValue" can have undefined value in the runtime.
export type NgChanges<Component, Props = ExcludeFunctions<Component>> = Partial<{
	[Key in keyof Props]: {
		previousValue: Props[Key];
		currentValue: Props[Key];
		firstChange: boolean;
		isFirstChange(): boolean;
	}
}> & SimpleChanges;
