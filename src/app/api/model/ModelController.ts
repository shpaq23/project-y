import { AnimatedSprite, Application, Sprite, Texture } from 'pixi.js';
import { AnimationModelHelper } from './AnimationModelHelper';
import { CharacterBasicAnimation } from './CharacterBasicAnimation';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { ModelWeaponController } from './ModelWeaponController';


export class ModelController {

	private readonly helper = new AnimationModelHelper();
	private readonly animationModel = this.helper.getBasicModelAnimation(this.basic);

	private readonly currentAnimatedSprites: Array<AnimatedSprite> = this.helper.getBasicModelAnimation(this.basic).walk.animation.down;
	private readonly currentIdleSprite: Array<Sprite> = this.helper.getBasicModelAnimation(this.basic).walk.idle.down;

	private readonly weaponController: ModelWeaponController | undefined = this.weapon
		? new ModelWeaponController(this.application, this.weapon, this.currentAnimatedSprites[0])
		: undefined;

	constructor(
		private readonly application: Application,
		private readonly basic: CharacterBasicAnimation,
		private readonly weapon?: CharacterWeaponAnimation
	) {
		this.initialize();
	}

	walkLeft(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setWalkTexture('left');
		this.weaponController?.walkLeft();
		this.play();
	}

	walkRight(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setWalkTexture('right');
		this.weaponController?.walkRight();
		this.play();
	}

	walkUp(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setWalkTexture('up');
		this.weaponController?.walkUp();
		this.play();
	}

	walkDown(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setWalkTexture('down');
		this.weaponController?.walkDown();
		this.play();
	}

	slashLeft(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setSlashTexture('left');
		this.weaponController?.slashLeft();
		this.play();
	}

	slashRight(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setSlashTexture('right');
		this.weaponController?.slashRight();
		this.play();
	}

	slashUp(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setSlashTexture('up');
		this.weaponController?.slashUp();
		this.play();
	}

	slashDown(): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		this.setSlashTexture('down');
		this.weaponController?.slashDown();
		this.play();
	}

	private setSlashTexture(direction: 'up' | 'down' | 'left' | 'right'): void {
		for (let i = 0; i < this.currentAnimatedSprites.length; i++) {
			let texture: Texture;
			let textures: Array<Texture>;
			texture = this.animationModel.slash.idle[direction][i].texture;
			textures = this.animationModel.slash.animation[direction][i].textures as Array<Texture>;
			this.currentAnimatedSprites[i].textures = textures;
			this.currentIdleSprite[i].texture = texture;

		}
	}

	private setWalkTexture(direction: 'up' | 'down' | 'left' | 'right'): void {
		for (let i = 0; i < this.currentAnimatedSprites.length; i++) {
			let texture: Texture;
			let textures: Array<Texture>;
			texture = this.animationModel.walk.idle[direction][i].texture;
			textures = this.animationModel.walk.animation[direction][i].textures as Array<Texture>;
			this.currentAnimatedSprites[i].textures = textures;
			this.currentIdleSprite[i].texture = texture;
		}
	}

	private initialize(): void {
		this.application.stage.addChild(...this.currentAnimatedSprites);
		this.application.stage.addChild(...this.currentIdleSprite);
		this.playIdle();
	}

	private play(): void {
		this.currentIdleSprite.forEach(sprite => {
			sprite.visible = false;
		});

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.visible = true;
			sprite.play();
			sprite.onComplete = () => {
				this.playIdle();
			};
		});
	}

	private playIdle(): void {
		this.currentAnimatedSprites.forEach(sprite => {
			sprite.visible = false;
		});
		this.currentIdleSprite.forEach(sprite => {
			sprite.visible = true;
		});
	}
}
