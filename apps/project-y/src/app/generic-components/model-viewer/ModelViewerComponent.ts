import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { Application } from 'pixi.js';
import { AnimationLoader } from '../../api/animation/AnimationLoader';
import { CharacterModelController } from '../../api/animation/controllers/CharacterModelController';
import { SpriteCreator } from '../../api/animation/SpriteCreator';
import { CharacterLook } from '../../api/model/character/look/CharacterLook';

@Component({
	selector: 'model-viewer',
	templateUrl: './ModelViewerComponent.html',
	styleUrls: ['./ModelViewerComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [SpriteCreator, AnimationLoader],
	standalone: true
})
export class ModelViewerComponent implements OnInit {

	@Input({ required: true })
	characterLook!: CharacterLook;

	@Input()
	height: number = 256;

	@Input()
	width: number = 256;

	@Output()
	readonly initialized = new EventEmitter<CharacterModelController>();

	private game!: Application;

	private modelAnimationController!: CharacterModelController;

	constructor(
		private readonly animationLoader: AnimationLoader,
		private readonly viewContainerRef: ViewContainerRef
	) {
	}

	ngOnInit(): void {
		this.game = new Application({ backgroundAlpha: 0 });
		this.game.stage.sortableChildren = true;
		this.modelAnimationController = this.animationLoader.loadAnimation(
			this.game,
			this.characterLook
		);
		this.attachGameCanvas();
		this.initialized.emit(this.modelAnimationController);
	}

	private attachGameCanvas(): void {
		this.viewContainerRef.element.nativeElement.appendChild(this.game.view);
	}
}
