import { AnimatedSprite, Rectangle, Texture } from 'pixi.js';

export class PixiAnimationDirection {

	private readonly ANIMATION_SPEED = 0.2;
	private readonly ANIMATION_SCALE = 4.0;

	private readonly leftAnimatedSprite = new AnimatedSprite(this.left);
	private readonly rightAnimatedSprite = new AnimatedSprite(this.right);
	private readonly upAnimatedSprite = new AnimatedSprite(this.up);
	private readonly downAnimatedSprite = new AnimatedSprite(this.down);


	constructor(
		private readonly left: Array<Texture>,
		private readonly right: Array<Texture>,
		private readonly up: Array<Texture>,
		private readonly down: Array<Texture>
	) {
		this.initialize();
	}

	getLeftAnimatedSprite(): AnimatedSprite {
		return this.leftAnimatedSprite;
	}

	getRightAnimatedSprite(): AnimatedSprite {
		return this.rightAnimatedSprite;
	}

	getUpAnimatedSprite(): AnimatedSprite {
		return this.upAnimatedSprite;
	}

	getDownAnimatedSprite(): AnimatedSprite {
		return this.downAnimatedSprite;
	}

	private initialize(): void {
		this.leftAnimatedSprite.scale.x = this.ANIMATION_SCALE;
		this.leftAnimatedSprite.scale.y = this.ANIMATION_SCALE;
		this.leftAnimatedSprite.animationSpeed = this.ANIMATION_SPEED;


		this.rightAnimatedSprite.scale.x = this.ANIMATION_SCALE;
		this.rightAnimatedSprite.scale.y = this.ANIMATION_SCALE;
		this.rightAnimatedSprite.animationSpeed = this.ANIMATION_SPEED;

		this.upAnimatedSprite.scale.x = this.ANIMATION_SCALE;
		this.upAnimatedSprite.scale.y = this.ANIMATION_SCALE;
		this.upAnimatedSprite.animationSpeed = this.ANIMATION_SPEED;

		this.downAnimatedSprite.scale.x = this.ANIMATION_SCALE;
		this.downAnimatedSprite.scale.y = this.ANIMATION_SCALE;
		this.downAnimatedSprite.animationSpeed = this.ANIMATION_SPEED;

	}
}
