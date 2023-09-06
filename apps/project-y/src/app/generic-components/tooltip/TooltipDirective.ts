import { DOCUMENT } from '@angular/common';
import { ComponentRef, Directive, ElementRef, HostListener, Inject, Input, Type } from '@angular/core';
import { RichText } from '../rich-text/RichText';
import { TooltipComponent } from './TooltipComponent';
import { ComponentOutletService } from '../outlet/ComponentOutletService';
import { TooltipService } from './TooltipService';

@Directive({
	selector: '[tooltip-directive]',
	standalone: true,
	providers: [TooltipService]
})
export class TooltipDirective {

	@Input({ alias: 'tooltip-directive', required: true })
	richText!: RichText;

	@HostListener('mouseenter') onMouseEnter() {
		this.createTooltip();
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.removeTooltip();
	}

	private tooltipComponentRef: ComponentRef<TooltipComponent> | null = null;

	constructor(
		@Inject(DOCUMENT) private readonly document: Document,
		private readonly componentOutletService: ComponentOutletService,
		private readonly tooltipService: TooltipService,
		private readonly elementRef: ElementRef
	) {
	}

	private createTooltip() {
		this.tooltipComponentRef = this.componentOutletService.createComponent(TooltipComponent);
		//to test the tooltip, change the content to ButtonComponent
		this.tooltipComponentRef.instance.richText = this.richText;
		this.tooltipComponentRef.changeDetectorRef.detectChanges();
		this.tooltipService.setTooltipPosition(this.elementRef, this.tooltipComponentRef.location.nativeElement);
	}

	private removeTooltip() {
		if (this.tooltipComponentRef) {
			this.tooltipComponentRef.destroy();
		}
	}
}