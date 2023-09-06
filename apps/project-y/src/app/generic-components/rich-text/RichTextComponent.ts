import { NgComponentOutlet, NgIf } from '@angular/common';
import { AfterViewInit, Component, ComponentRef, Input, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { RichText } from './RichText';

@Component({
	selector: 'rich-text',
	templateUrl: './RichTextComponent.html',
	imports: [
		NgIf,
		NgComponentOutlet
	],
	standalone: true
})
export class RichTextComponent implements AfterViewInit, OnDestroy {

	@ViewChild('componentOutlet', { read: ViewContainerRef })
	componentOutlet: ViewContainerRef | undefined;

	@Input({ required: true })
	richText!: RichText;

	private componentRef?: ComponentRef<any>;

	ngAfterViewInit(): void {
		this.resolveInitDynamicComponent();
	}

	ngOnDestroy() {
		this.componentRef?.destroy();
	}

	private resolveInitDynamicComponent(): void {
		if (this.componentOutlet) {
			const componentConfig = this.richText.getComponentConfig();
			const params = componentConfig.params || {};
			this.componentRef = this.componentOutlet.createComponent(
				componentConfig.component, { injector: componentConfig.injector }
			);

			Object.entries(params).forEach(([key, value]) => {
				this.componentRef!.instance[key] = value;
			});

			this.componentRef.changeDetectorRef.detectChanges();
		}
	}

}
