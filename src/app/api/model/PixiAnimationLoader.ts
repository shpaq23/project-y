import { Injectable } from '@angular/core';
import { Application, BaseTexture, Rectangle, Texture } from 'pixi.js';
import { ModelController } from './ModelController';
import { PixiAnimation } from './PixiAnimation';
import { PixiAnimationDirection } from './PixiAnimationDirection';

@Injectable()
export class PixiAnimationLoader {

	private readonly FRAME_WIDTH = 64;
	private readonly FRAME_HEIGHT = 64;

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
		const bowUrl: string = 'assets/weapon/ranged/bow/recurve/walk/background/recurve.png';

		const bodyAnimation = this.getAnimation(bodyUrl);
		const headAnimation = this.getAnimation(headUrl);
		const bowAnimation = this.getBowAnimation();
		const weaponAnimation = this.getWeaponAnimation();
		return new ModelController(game, bodyAnimation, headAnimation, bowAnimation, weaponAnimation);

	}


	private getWeaponAnimation(): PixiAnimationDirection {
		const weaponSlashBehindUrl = 'assets/weapon/sword/glowsword/attack_slash/behind/red.png';
		const weaponSlash = 'assets/weapon/sword/glowsword/attack_slash/red.png';
		const sheetSlashBehind = BaseTexture.from(weaponSlashBehindUrl);
		const sheetSlash = BaseTexture.from(weaponSlash);
		const frameWidth = 192;
		const frameHeight = 192;

		const slashUp: Array<Texture> = [];
		const slashLeft: Array<Texture> = [];
		const slashDown: Array<Texture> = [];
		const slashRight: Array<Texture> = [];

		for (let x = 0; x < this.SLASH_FRAMES; x++) {
			slashUp.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 0 * frameHeight, frameWidth, frameHeight)));
			slashLeft.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 1 * frameHeight, frameWidth, frameHeight)));
			slashDown.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 2 * frameHeight, frameWidth, frameHeight)));
			slashRight.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 3 * frameHeight, frameWidth, frameHeight)));
		}

		const slashDirection = new PixiAnimationDirection(slashLeft, slashRight, slashUp, slashDown);
		return slashDirection;
	}

	private getBowAnimation(): PixiAnimationDirection {
		const bowWalkBackgroundUrl = 'assets/weapon/ranged/bow/recurve/walk/background/recurve.png';
		const bowWalkForegroundUrl = 'assets/weapon/ranged/bow/recurve/walk/foreground/recurve.png';
		const sheetForeGround = BaseTexture.from(bowWalkForegroundUrl);
		const sheetBackGround = BaseTexture.from(bowWalkBackgroundUrl);

		const frameWidth = 128;
		const frameHeight = 128;
		const walkUp: Array<Texture> = [];
		const walkLeft: Array<Texture> = [];
		const walkDown: Array<Texture> = [];
		const walkRight: Array<Texture> = [];

		for (let x = 0; x < this.WALK_FRAMES; x++) {
			walkUp.push(new Texture(sheetBackGround, new Rectangle(x * frameWidth, 0 * frameHeight, frameWidth, frameHeight)));
			walkLeft.push(new Texture(sheetBackGround, new Rectangle(x * frameWidth, 1 * frameHeight, frameWidth, frameHeight)));
			walkDown.push(new Texture(sheetForeGround, new Rectangle(x * frameWidth, 0 * frameHeight, frameWidth, frameHeight)));
			walkRight.push(new Texture(sheetBackGround, new Rectangle(x * frameWidth, 3 * frameHeight, frameWidth, frameHeight)));
		}

		const walkDirection = new PixiAnimationDirection(walkLeft, walkRight, walkUp, walkDown);
		return walkDirection;
	}


	private getAnimation(url: string): PixiAnimation {
		const walkAnimation = this.getWalkAnimation(url);
		const getSlashAnimation = this.getSlashAnimation(url);
		return new PixiAnimation(walkAnimation, getSlashAnimation);
	}

	private getWalkAnimation(url: string): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const walkUp: Array<Texture> = [];
		const walkLeft: Array<Texture> = [];
		const walkDown: Array<Texture> = [];
		const walkRight: Array<Texture> = [];

		for (let x = 0; x < this.WALK_FRAMES; x++) {
			walkUp.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, this.WALK_FRAMES_START * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			walkLeft.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.WALK_FRAMES_START + 1) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			walkDown.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.WALK_FRAMES_START + 2) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			walkRight.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.WALK_FRAMES_START + 3) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
		}


		return new PixiAnimationDirection(walkLeft, walkRight, walkUp, walkDown);
	}

	private getSlashAnimation(url: string): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const slashUp: Array<Texture> = [];
		const slashLeft: Array<Texture> = [];
		const slashDown: Array<Texture> = [];
		const slashRight: Array<Texture> = [];

		for (let x = 0; x < this.SLASH_FRAMES; x++) {
			slashUp.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, this.SLASH_FRAMES_START * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			slashLeft.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.SLASH_FRAMES_START + 1) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			slashDown.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.SLASH_FRAMES_START + 2) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			slashRight.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.SLASH_FRAMES_START + 3) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
		}

		return new PixiAnimationDirection(slashLeft, slashRight, slashUp, slashDown);
	}
}
