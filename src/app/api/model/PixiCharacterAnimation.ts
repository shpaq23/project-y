import { AnimatedSprite, Application } from 'pixi.js';
import { Observable } from 'rxjs';
import { PixiAnimation } from './PixiAnimation';

export class PixiCharacterAnimation {

	private readonly walkLeftSprites = this.createWalkLeftSprites();
	private readonly walkRightSprites = this.createWalkRightSprites();
	private readonly walkUpSprites = this.createWalkUpSprites();
	private readonly walkDownSprites = this.createWalkDownSprites();

	private readonly slashLeftSprites = this.createSlashLeftSprites();
	private readonly slashRightSprites = this.createSlashRightSprites();
	private readonly slashUpSprites = this.createSlashUpSprites();
	private readonly slashDownSprites = this.createSlashDownSprites();


	private currentTexture: Array<AnimatedSprite> = this.walkDownSprites;

	constructor(
		private readonly body: PixiAnimation,
		private readonly head: PixiAnimation,
		private readonly pixiApplication: Application
	) {
		this.initialize();
	}

	walkLeft(): Observable<void> {
		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.walkLeftSprites[index].textures;
		});
		return this.play();
	}

	walkRight(): Observable<void> {
		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.walkRightSprites[index].textures;
		});
		return this.play();
	}

	walkUp(): Observable<void> {
		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.walkUpSprites[index].textures;
		});
		return this.play();
	}

	walkDown(): Observable<void> {
		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.walkDownSprites[index].textures;
		});
		return this.play();
	}

	private initialize(): void {
		this.pixiApplication.stage.addChild(...this.currentTexture);
	}

	private play(): Observable<void> {
		return new Observable((observer) => {
			this.currentTexture.forEach((sprite) => {
				sprite.play();
				sprite.loop = false;
				sprite.onComplete = () => {
					observer.next();
					observer.complete();
				};
			});
		})
	}

	private createWalkLeftSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getLeftAnimatedSprite(),
			this.head.getWalk().getLeftAnimatedSprite()
		];
	}

	private createWalkRightSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getRightAnimatedSprite(),
			this.head.getWalk().getRightAnimatedSprite()
		];
	}

	private createWalkUpSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getUpAnimatedSprite(),
			this.head.getWalk().getUpAnimatedSprite()
		];
	}

	private createWalkDownSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getDownAnimatedSprite(),
			this.head.getWalk().getDownAnimatedSprite()
		];
	}

	private createSlashLeftSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getLeftAnimatedSprite(),
			this.head.getSlash().getLeftAnimatedSprite()
		];
	}

	private createSlashRightSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getRightAnimatedSprite(),
			this.head.getSlash().getRightAnimatedSprite()
		];
	}

	private createSlashUpSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getUpAnimatedSprite(),
			this.head.getSlash().getUpAnimatedSprite()
		];
	}

	private createSlashDownSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getDownAnimatedSprite(),
			this.head.getSlash().getDownAnimatedSprite()
		];
	}

}
