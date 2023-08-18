import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { Application } from 'pixi.js';
import { ModelController } from '../../api/model/ModelController';
import { PixiAnimationLoader } from '../../api/model/PixiAnimationLoader';

@Component({
	selector: 'model-viewer',
	templateUrl: './ModelViewerComponent.html',
	styleUrls: ['./ModelViewerComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		PixiAnimationLoader
	],
	standalone: true
})
export class ModelViewerComponent implements OnInit {

	@Output()
	readonly initialized = new EventEmitter<ModelController>();

	@Input()
	height: number = 256;

	@Input()
	width: number = 256;

	private game!: Application;


	private modelAnimationController!: ModelController;

	constructor(
		private readonly pixiAnimationLoader: PixiAnimationLoader,
		private readonly viewContainerRef: ViewContainerRef
	) {
	}

	ngOnInit(): void {
		this.game = new Application({ backgroundAlpha: 0 });
		this.game.stage.sortableChildren = true;
		this.modelAnimationController = this.pixiAnimationLoader.getCharacterAnimation(this.game);
		this.attachGameCanvas();
		this.initialized.emit(this.modelAnimationController);
	}


	private attachGameCanvas(): void {
		this.viewContainerRef.element.nativeElement.appendChild(this.game.view);
	}

}