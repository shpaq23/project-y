import { ComponentRef, Inject, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ComponentOutletService {

	private viewContainerRef: ViewContainerRef | null = null;

	setContainerRef(viewContainerRef: ViewContainerRef): void {
		if (this.viewContainerRef) {
			throw new Error('ContainerRef already set');
		}
		this.viewContainerRef = viewContainerRef;
	}

	createComponent<T>(component: Type<T>): ComponentRef<T> {
		if (!this.viewContainerRef) {
			throw new Error('ContainerRef not set');
		}
		return this.viewContainerRef.createComponent(component);
	}

}
