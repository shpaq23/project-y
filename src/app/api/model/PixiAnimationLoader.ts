import { Injectable } from '@angular/core';
import { Application, BaseTexture, Rectangle, Texture } from 'pixi.js';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { katana, longSword } from './LPCWeapon';
import { ModelController } from './ModelController';
import { PixiAnimation } from './PixiAnimation';
import { PixiAnimationDirection } from './PixiAnimationDirection';

@Injectable()
export class PixiAnimationLoader {

	private readonly FRAME_SIZE = 64;

	private readonly CAST_FRAMES = 7;
	private readonly CAST_FRAMES_START = 0;

	private readonly THRUST_FRAMES = 8;
	private readonly THRUST_FRAMES_START = 4;

	private readonly WALK_FRAMES = 9;
	private readonly WALK_FRAMES_START = 8;

	private readonly SLASH_FRAMES = 6;
	private readonly SLASH_FRAMES_START = 12;

	private readonly SHOOT_FRAMES = 13;
	private readonly SHOOT_FRAMES_START = 16;

	private readonly DEAD_FRAMES = 6;
	private readonly DEAD_FRAMES_START = 20;


	getCharacterAnimation(game: Application): ModelController {
		const bodyUrl: string = 'assets/body/bodies/male/universal.png';
		const headUrl: string = 'assets/head/heads/human_male/universal.png';


		const bodyAnimation = this.getAnimation(bodyUrl, 'character');
		const headAnimation = this.getAnimation(headUrl, 'character');
		const characterBasicAnimation = { body: bodyAnimation, head: headAnimation };
		return new ModelController(game, characterBasicAnimation, this.getWeaponAnimation());

	}

	private getWeaponAnimation(): CharacterWeaponAnimation {
		const weapon = longSword;
		const weaponAnimation: CharacterWeaponAnimation = {};
		if (weapon.universal) {
			weaponAnimation.universal = {
				normal: this.getAnimation(weapon.universal.normal, 'weapon')
			};
			if (weapon.universal.behind) {
				weaponAnimation.universal.behind = this.getAnimation(weapon.universal.behind, 'weapon', true);
			}
		}

		if (weapon.walk) {
			weaponAnimation.walk = {
				normal: this.getWalkAnimation(weapon.walk.normal, 'weapon', weapon.walk.size)
			};
			if (weapon.walk.behind) {
				weaponAnimation.walk.behind = this.getWalkAnimation(weapon.walk.behind, 'weapon', weapon.walk.size, true);
			}
		}

		if (weapon.slash) {
			weaponAnimation.slash = {
				normal: this.getSlashAnimation(weapon.slash.normal, 'weapon', weapon.slash.size)
			};
			if (weapon.slash.behind) {
				weaponAnimation.slash.behind = this.getSlashAnimation(weapon.slash.behind, 'weapon', weapon.slash.size, true);
			}
		}

		if (weapon.thrust) {
			weaponAnimation.thrust = {
				normal: this.getThrustAnimation(weapon.thrust.normal, 'weapon', weapon.thrust.size)
			};
			if (weapon.thrust.behind) {
				weaponAnimation.thrust.behind = this.getThrustAnimation(weapon.thrust.behind, 'weapon', weapon.thrust.size, true);
			}
		}

		return weaponAnimation;
	}


	private getAnimation(url: string, type: 'weapon' | 'character', behind?: boolean): PixiAnimation {
		const walkAnimation = this.getWalkAnimation(url, type, undefined, behind);
		const slashAnimation = this.getSlashAnimation(url, type, undefined, behind);
		const thrustAnimation = this.getThrustAnimation(url, type, undefined, behind);
		return new PixiAnimation(walkAnimation, slashAnimation, thrustAnimation);
	}

	private getWalkAnimation(url: string, type: 'weapon' | 'character', size?: number, isBehind?: boolean): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const walkUp: Array<Texture> = [];
		const walkLeft: Array<Texture> = [];
		const walkDown: Array<Texture> = [];
		const walkRight: Array<Texture> = [];
		const frameSize = size ?? this.FRAME_SIZE;
		const startFrame = size ? 0 : this.WALK_FRAMES_START;

		for (let x = 0; x < this.WALK_FRAMES; x++) {
			walkUp.push(new Texture(sheet, new Rectangle(x * frameSize, startFrame * frameSize, frameSize, frameSize)));
			walkLeft.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			walkDown.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			walkRight.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}


		return new PixiAnimationDirection(walkLeft, walkRight, walkUp, walkDown, type, size, isBehind);
	}

	private getSlashAnimation(url: string, type: 'weapon' | 'character', size?: number, isBehind?: boolean): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const slashUp: Array<Texture> = [];
		const slashLeft: Array<Texture> = [];
		const slashDown: Array<Texture> = [];
		const slashRight: Array<Texture> = [];
		const frameSize = size ?? this.FRAME_SIZE;
		const startFrame = size ? 0 : this.SLASH_FRAMES_START;

		for (let x = 0; x < this.SLASH_FRAMES; x++) {
			slashUp.push(new Texture(sheet, new Rectangle(x * frameSize, startFrame * frameSize, frameSize, frameSize)));
			slashLeft.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			slashDown.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			slashRight.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}

		return new PixiAnimationDirection(slashLeft, slashRight, slashUp, slashDown, type, size, isBehind);
	}

	private getThrustAnimation(url: string, type: 'weapon' | 'character', size?: number, isBehind?: boolean): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const thrustUp: Array<Texture> = [];
		const thrustLeft: Array<Texture> = [];
		const thrustDown: Array<Texture> = [];
		const thrustRight: Array<Texture> = [];
		const frameSize = size ?? this.FRAME_SIZE;
		const startFrame = size ? 0 : this.THRUST_FRAMES_START;

		for (let x = 0; x < this.THRUST_FRAMES; x++) {
			thrustUp.push(new Texture(sheet, new Rectangle(x * frameSize, startFrame * frameSize, frameSize, frameSize)));
			thrustLeft.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			thrustDown.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			thrustRight.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}

		return new PixiAnimationDirection(thrustLeft, thrustRight, thrustUp, thrustDown, type, size, isBehind);
	}
}
