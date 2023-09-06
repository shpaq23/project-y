import { Injector, Type } from '@angular/core';

export type RichTextComponentConfigParams<T extends {} = {}> = {
	readonly [P in keyof T]?: T[P] extends (...any: Array<any>) => any ? never : T[P]
};

interface RichTextConfigComponent<T extends {} = {}> {
	readonly component: Type<T>;
	readonly injector?: Injector;
	readonly params?: RichTextComponentConfigParams<T>;
}

type RichTextType = 'text' | 'component';

export class RichText {

	private constructor(
		private readonly type: RichTextType,
		private readonly content: string | RichTextConfigComponent
	) {
	}

	static text(text: string): RichText {
		return new RichText('text', text);
	}

	static component<T extends {}>(componentConfig: RichTextConfigComponent<T>): RichText {
		return new RichText('component', componentConfig);
	}

	isText(): boolean {
		return this.type === 'text';
	}

	isComponent(): boolean {
		return this.type === 'component';
	}

	getComponentConfig(): RichTextConfigComponent {
		if (!this.isComponent()) {
			throw new Error('RichText is not a component');
		}
		return this.content as RichTextConfigComponent;
	}

	getText(): string {
		if (!this.isText()) {
			throw new Error('RichText is not text');
		}
		return this.content as string;
	}

}
