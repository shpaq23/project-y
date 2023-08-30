import { Injectable } from '@angular/core';
import { AnimatedSprite, Sprite, Texture } from 'pixi.js';

export type Layer = 'normal' | 'behind' | 'front';

@Injectable()
export class SpriteCreator {
  private readonly ANIMATION_SPEED = 0.2;
  private readonly ANIMATION_SCALE = 2.0;

  private readonly NORMAL_Z_INDEX = 10;
  private readonly FRONT_Z_INDEX = 20;
  private readonly BEHIND_Z_INDEX = 1;

  private readonly SPRITE_DEFAULT_SIZE = 64;

  createSprite(texture: Texture, layer: Layer, oversize?: number): Sprite {
    const sprite = new Sprite(texture);
    this.setSpriteProperties(sprite, layer, oversize);
    return sprite;
  }

  createAnimatedSprite(
    textures: Array<Texture>,
    layer: Layer,
    oversize?: number
  ): AnimatedSprite {
    const animatedSprite = new AnimatedSprite(textures);
    this.setSpriteProperties(animatedSprite, layer, oversize);
    return animatedSprite;
  }

  copySprite(sprite: Sprite | AnimatedSprite): Sprite | AnimatedSprite {
    let copySprite: Sprite | AnimatedSprite;

    if (sprite instanceof AnimatedSprite) {
      copySprite = new AnimatedSprite(sprite.textures);
      (copySprite as AnimatedSprite).animationSpeed = sprite.animationSpeed;
      (copySprite as AnimatedSprite).loop = sprite.loop;
    } else {
      copySprite = new Sprite(sprite.texture);
    }
    copySprite.scale.set(sprite.scale.x, sprite.scale.y);
    copySprite.zIndex = sprite.zIndex;
    copySprite.x = sprite.x;
    copySprite.y = sprite.y;
    return copySprite;
  }

  private setSpriteProperties(
    sprite: Sprite | AnimatedSprite,
    layer: Layer,
    oversize?: number
  ): void {
    sprite.scale.set(this.ANIMATION_SCALE, this.ANIMATION_SCALE);

    if (layer === 'behind') {
      sprite.zIndex = this.BEHIND_Z_INDEX;
    } else if (layer === 'front') {
      sprite.zIndex = this.FRONT_Z_INDEX;
    } else {
      sprite.zIndex = this.NORMAL_Z_INDEX;
    }

    if (oversize) {
      sprite.x = -(oversize - this.SPRITE_DEFAULT_SIZE);
      sprite.y = -(oversize - this.SPRITE_DEFAULT_SIZE);
    }

    if (sprite instanceof AnimatedSprite) {
      sprite.loop = false;
      sprite.animationSpeed = this.ANIMATION_SPEED;
    }
  }
}
