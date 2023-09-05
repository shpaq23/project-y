import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentOutletService } from './ComponentOutletService';

@Component({
	selector: 'component-outlet',
	templateUrl: './ComponentOutletComponent.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true
})

export class ComponentOutletComponent implements OnInit {

	@ViewChild('container', { read: ViewContainerRef, static: true })
	container!: ViewContainerRef;

	constructor(
		private readonly componentOutletService: ComponentOutletService
	) {

	}

	ngOnInit(): void {
		this.componentOutletService.setContainerRef(this.container);
	}
}
