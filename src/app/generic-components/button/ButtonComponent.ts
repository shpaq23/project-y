import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, Renderer2, SimpleChanges, ViewContainerRef, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/utils/BaseComponent';

type ButtonType = 'primary' | 'info';

@Component({
	selector: 'button[btn]',
	templateUrl: './ButtonComponent.html',
	styleUrls: ['./ButtonComponent.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends BaseComponent implements OnChanges, OnInit {

	@Input() 
	type: ButtonType = 'primary'
	
	constructor() {
			super();
		}

	ngOnInit(): void {
		this.setHostClass();
	}
		
	ngOnChanges(): void {
		this.setHostClass();
	}

	private setHostClass(): void {
		this.domManipulator.removeHostClass('btn-primary');
		this.domManipulator.removeHostClass('btn-info');
		this.domManipulator.removeHostClass('btn-warning');

		switch (this.type) {
			case 'info':
				this.domManipulator.addHostClass('btn-info');
			break;
			case 'primary':
				this.domManipulator.addHostClass('btn-primary');
			break;
		}
	}

}
