import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { Application } from 'pixi.js';
import { PixiAnimationLoader } from '../../api/model/PixiAnimationLoader';
import { PixiCharacterAnimation } from '../../api/model/PixiCharacterAnimation';

@Component({
	selector: 'pixi-component',
	templateUrl: './PixiComponent.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		PixiAnimationLoader
	],
	standalone: true
})
export class PixiComponent implements OnInit {

	game = new Application({ backgroundAlpha: 0, width: 256, height: 256 });


	private characterAnimation!: PixiCharacterAnimation;

	constructor(
		private readonly pixiAnimationLoader: PixiAnimationLoader,
		private readonly viewContainerRef: ViewContainerRef
	) {
	}

	ngOnInit(): void {
		this.characterAnimation = this.pixiAnimationLoader.getCharacterAnimation(this.game);
		// this.character = new AnimatedSprite(this.characterAnimation.getBody().getWalk().getLeft());
		//
		// const characterHead = new AnimatedSprite(this.characterAnimation.getHead().getWalk().getLeft());
		//
		// this.game.stage.addChild(this.character, characterHead);
		// this.character.play();
		// this.character.animationSpeed = 0.3;
		// characterHead.play();
		// characterHead.animationSpeed = 0.3;
		// console.log(this.characterAnimation);
		// this.characterAnimation.walkDown();
		// const wolkDownANimation = this.characterAnimation.getWalkDownAnimation();
		// this.game.stage.addChild(...wolkDownANimation);
		// this.characterAnimation.walkDown();
		setTimeout(() => {
			this.characterAnimation.walkLeft()
			    .subscribe(() => {
				    console.log('walked left');
			    });
		}, 2000);
		this.attachGameCanvas();
	}


	private attachGameCanvas(): void {
		this.viewContainerRef.element.nativeElement.appendChild(this.game.view);
	}

}
