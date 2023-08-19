import { AnimatedSprite, Sprite, Texture } from 'pixi.js';

export class PixiAnimationDirection {

	private readonly ANIMATION_SPEED = 0.2;
	private readonly ANIMATION_SCALE = 2.0;

	private readonly CHARACTER_Z_INDEX = 10;
	private readonly WEAPON_Z_INDEX = 20;
	private readonly WEAPON_Z_INDEX_BEHIND = 1;

	private readonly ANIMATION_IDLE_FRAME = 0;

	constructor(
		private readonly left: Array<Texture>,
		private readonly right: Array<Texture>,
		private readonly up: Array<Texture>,
		private readonly down: Array<Texture>,
		private readonly type: 'weapon' | 'character',
		private readonly size?: number,
		private readonly isBehind?: boolean
	) {
	}

	getLeftAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.left.slice(1));
		this.setSpriteProperties(animatedSprite);
		return animatedSprite;
	}

	getLeftIdleSprite(): Sprite {
		const sprite = new Sprite(this.left[this.ANIMATION_IDLE_FRAME]);
		this.setSpriteProperties(sprite);
		return sprite;
	}

	getRightAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.right.slice(1));
		this.setSpriteProperties(animatedSprite);
		return animatedSprite;
	}

	getRightIdleSprite(): Sprite {
		const sprite = new Sprite(this.right[this.ANIMATION_IDLE_FRAME]);
		this.setSpriteProperties(sprite);
		return sprite;
	}

	getUpAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.up.slice(1));
		this.setSpriteProperties(animatedSprite);
		return animatedSprite;
	}

	getUpIdleSprite(): Sprite {
		const sprite = new Sprite(this.up[this.ANIMATION_IDLE_FRAME]);
		this.setSpriteProperties(sprite);
		return sprite;
	}

	getDownAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.down.slice(1));
		this.setSpriteProperties(animatedSprite);
		return animatedSprite;
	}

	getDownIdleSprite(): Sprite {
		const sprite = new Sprite(this.down[this.ANIMATION_IDLE_FRAME]);
		this.setSpriteProperties(sprite);
		return sprite;
	}


	private setSpriteProperties(animatedSprite: AnimatedSprite | Sprite): void {
		animatedSprite.scale.x = this.ANIMATION_SCALE;
		animatedSprite.scale.y = this.ANIMATION_SCALE;
		// behind means that the character need to be behind, so if something is behind it's actually in front
		animatedSprite.zIndex = this.CHARACTER_Z_INDEX;
		if (this.type === 'weapon') {
			animatedSprite.zIndex = this.isBehind ? this.WEAPON_Z_INDEX_BEHIND : this.WEAPON_Z_INDEX;
		}

		if (animatedSprite instanceof AnimatedSprite) {
			animatedSprite.animationSpeed = this.ANIMATION_SPEED;
		}
	}
}
