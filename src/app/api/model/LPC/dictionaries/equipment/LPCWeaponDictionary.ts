import { LPCGender } from '../../enums/body/LPCGender';
import { LPCWeapon } from '../../enums/equipment/weapon/LPCWeapon';
import { LPCWeaponStrings } from '../../enums/equipment/weapon/LPCWeaponStrings';

export type LPCWeaponDictionary = {
	[gender in LPCGender]: {
		[weapon in LPCWeapon]?: LPCWeaponStrings
	}
};


const basePath = 'assets/weapon/'

const halberd: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'polearm/halberd/halberd.png',
		behind: basePath + 'polearm/halberd/behind/halberd.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'polearm/halberd/attack_slash/halberd.png',
		behind: basePath + 'polearm/halberd/attack_slash/behind/halberd.png'
	},
	thrust: {
		size: 192,
		normal: basePath + 'polearm/halberd/attack_thrust/halberd.png',
		behind: basePath + 'polearm/halberd/attack_thrust/behind/halberd.png'
	}
}

const dagger: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/dagger/dagger.png',
		behind: basePath + 'sword/dagger/behind/dagger.png'
	}
}

const simple_staff_female: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'magic/simple_staff/female/simple_staff.png',
	}
}

const simple_staff_male: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'magic/simple_staff/male/simple_staff.png',
	}
}

const gnarled: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'magic/gnarled/gnarled.png',
		behind: basePath + 'magic/gnarled/universal_behind/gnarled.png'
	},
	thrust: {
		size: 192,
		normal: basePath + 'magic/gnarled/attack_thrust/gnarled.png',
		behind: basePath + 'magic/gnarled/attack_thrust/background/gnarled.png'
	}
}

const normal_bow: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'ranged/bow/normal/normal.png',
	},
	walk: {
		size: 128,
		normal: basePath + 'ranged/bow/normal/walk/foreground/normal.png',
		behind: basePath + 'ranged/bow/normal/walk/background/normal.png'
	}
}

export const lpcWeaponDictionary: LPCWeaponDictionary = {
	[LPCGender.male]: {
		dagger, normal_bow, simple_staff: simple_staff_male, gnarled, halberd
	},
	[LPCGender.female]: {
		dagger, normal_bow, simple_staff: simple_staff_female, gnarled, halberd
	}
};
