import { CharacterBodyLook } from './CharacterBodyLook';
import { CharacterEquipmentLook } from './CharacterEquipmentLook';

export class CharacterLook {

	constructor(
		private readonly body: CharacterBodyLook,
		private readonly equipment: CharacterEquipmentLook
	) {
	}
}