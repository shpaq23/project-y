import { DOCUMENT } from '@angular/common';
import { ComponentRef, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { TooltipComponent } from './TooltipComponent';
import { ComponentOutletService } from '../outlet/ComponentOutletService';
import { TooltipService } from './TooltipService';

@Directive({
	selector: '[tooltip-directive]',
	standalone: true,
	providers: [TooltipService]
})
export class TooltipDirective {

	@Input('tooltip-directive')
	tooltipText: string = '';

	private tooltipComponentRef: ComponentRef<TooltipComponent> | null = null;

	constructor(
		@Inject(DOCUMENT) private readonly document: Document,
		private readonly componentOutletService: ComponentOutletService,
		private readonly tooltipService: TooltipService,
		private readonly elementRef: ElementRef
	) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.createTooltip()
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.removeTooltip();
	}

	private createTooltip() {
		this.tooltipComponentRef = this.componentOutletService.createComponent(TooltipComponent);
		this.tooltipComponentRef.instance.text = this.tooltipText;
		this.tooltipComponentRef.changeDetectorRef.detectChanges();
		this.tooltipService.setTooltipPosition(this.elementRef, this.tooltipComponentRef.location.nativeElement);
	}

	private removeTooltip() {
		if (this.tooltipComponentRef) {
			this.tooltipComponentRef.destroy();
		}
	}
}