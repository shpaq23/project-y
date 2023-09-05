import { ComponentRef, ElementRef, Injectable } from '@angular/core';

@Injectable()
export class TooltipService {

	setTooltipPosition(elementRef: ElementRef, tooltipElement: HTMLElement): void {
		const rootElementWidth: number = 1024;
		const rootElementHeight: number = 768;

		const screenWidth: number = window.innerWidth;
		const screenHeight: number = window.innerHeight;

		const marginHorizontal: number = (screenWidth - rootElementWidth)/2;
		const marginVertical: number = (screenHeight - rootElementHeight)/2;

		const verticalDistance: number = 50;
		const horizontalDistance: number = 10;

		const elementPosition = elementRef.nativeElement.getBoundingClientRect();
		tooltipElement.style.top = `${elementPosition.top - marginVertical - verticalDistance}px`;
		tooltipElement.style.left = `${elementPosition.left - marginHorizontal + elementPosition.width + horizontalDistance}px`;

		if (elementPosition.top - marginVertical - verticalDistance < 0) {
			tooltipElement.style.top = `${elementPosition.top - marginVertical + elementPosition.height}px`
		}

		if(elementPosition.left - marginHorizontal + elementPosition.width + horizontalDistance > screenWidth) {
			tooltipElement.style.left = `${elementPosition.left - marginHorizontal - tooltipElement.offsetWidth - horizontalDistance}px`;
		}
	}
}