import { ChangeDetectorRef, Directive, ElementRef, inject, Renderer2 } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DOMManipulator } from './DOMManipulator';

export abstract class Finalizable {
	abstract finalize(): void;
}

@Directive()
export abstract class BaseComponent extends Finalizable {

	readonly renderer: Renderer2;

	readonly elementRef: ElementRef;

	protected onDestroy$: Subject<void> = new Subject<void>();

	protected readonly domManipulator: DOMManipulator;

	private readonly constructorName: string;


	protected constructor(
		// eslint-disable-next-line softwareplant-rules/injectable-name
		private readonly baseComponentDetector?: ChangeDetectorRef
	) {
		super();
		this.elementRef = inject(ElementRef);
		this.renderer = inject(Renderer2);
		this.constructorName = this.constructor.name;
		this.domManipulator = new DOMManipulator();
	}

	finalize(): void {
	}


	// !! IMPORTANT !! //
	// after renaming method below remember to change eslint rule: tools/eslint/src/rules/typescript/component-take-until-destroy.ts //
	protected takeUntilDestroy<T>(): MonoTypeOperatorFunction<T> {
		return (input$) => input$.pipe(
			takeUntil(this.onDestroy$)
		);
	}

	// eslint-disable-next-line softwareplant-rules/lifecycle-hooks-interface
	private ngOnDestroy(): void {
		this.complete();
		this.finalize();
	}

	private complete(): void {
		this.onDestroy$.next();
		this.onDestroy$.complete();
	}
}
