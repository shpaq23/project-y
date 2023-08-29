import { LPCGender } from '../../enums/body/LPCGender';
import { LPCWeapon } from '../../enums/equipment/weapon/LPCWeapon';
import { LPCWeaponStrings } from '../../enums/equipment/weapon/LPCWeaponStrings';

export type LPCWeaponDictionary = {
	[gender in LPCGender]: {
		[weapon in LPCWeapon]?: LPCWeaponStrings
	}
};

const basePath = 'assets/lpc/weapon/'

//POLEARM
const cane_female: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'polearm/cane/female/cane.png',
	}
}

const cane_male: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'polearm/cane/male/cane.png',
	}
}

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

const scythe: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'polearm/scythe/scythe.png',
		behind: basePath + 'polearm/scythe/universal_behind/scythe.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'polearm/scythe/attack_slash/scythe.png',
		behind: basePath + 'polearm/scythe/attack_slash/behind/scythe.png'
	},
}

//SWORD
const dagger: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/dagger/dagger.png',
		behind: basePath + 'sword/dagger/behind/dagger.png'
	}
}

const glowsword_blue: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/glowsword_blue/blue.png',
		behind: basePath + 'sword/glowsword_blue/universal_behind/blue.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'sword/glowsword_blue/attack_slash/blue.png',
		behind: basePath + 'sword/glowsword_blue/attack_slash/behind/blue.png'
	},
}	

const glowsword_red: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/glowsword_red/red.png',
		behind: basePath + 'sword/glowsword_red/universal_behind/red.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'sword/glowsword_red/attack_slash/red.png',
		behind: basePath + 'sword/glowsword_red/attack_slash/behind/red.png'
	},
}

const katana: LPCWeaponStrings = {
	slash: {
		size: 128,
		normal: basePath + 'sword/katana/slash/katana.png',
		behind: basePath + 'sword/katana/slash/behind/katana.png'
	},
	walk: {
		size: 128,
		normal: basePath + 'sword/katana/walk/katana.png',
		behind: basePath + 'sword/katana/walk/behind/katana.png'
	}
}

const longsword: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/longsword/longsword.png',
		behind: basePath + 'sword/longsword/universal_behind/longsword.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'sword/longsword/attack_slash/longsword.png',
		behind: basePath + 'sword/longsword/attack_slash/behind/longsword.png'
	},
	thrust: {
		size: 192,
		normal: basePath + 'sword/longsword/attack_thrust/longsword.png',
		behind: basePath + 'sword/longsword/attack_thrust/behind/longsword.png'
	}
}

const rapier: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/rapier/rapier.png',
		behind: basePath + 'sword/rapier/universal_behind/rapier.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'sword/rapier/attack_slash/rapier.png',
		behind: basePath + 'sword/rapier/attack_slash/behind/rapier.png'
	},
}

const saber: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'sword/saber/saber.png',
		behind: basePath + 'sword/saber/universal_behind/saber.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'sword/saber/attack_slash/saber.png',
		behind: basePath + 'sword/saber/attack_slash/behind/saber.png'
	},
}

const scimitar: LPCWeaponStrings = {
	slash: {
		size: 128,
		normal: basePath + 'sword/scimitar/slash/scimitar.png',
		behind: basePath + 'sword/scimitar/slash/behind/scimitar.png'
	},
	walk: {
		size: 128,
		normal: basePath + 'sword/scimitar/walk/scimitar.png',
		behind: basePath + 'sword/scimitar/walk/behind/scimitar.png'
	}
}

const diamond: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'magic/diamond/diamond.png',
		behind: basePath + 'magic/diamond/universal_behind/diamond.png'
	},
	thrust: {
		size: 192,
		normal: basePath + 'magic/diamond/attack_thrust/diamond.png',
		behind: basePath + 'magic/diamond/attack_thrust/background/diamond.png'
	}
}

const loop: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'magic/loop/loop.png',
		behind: basePath + 'magic/loop/universal_behind/loop.png'
	},
	thrust: {
		size: 192,
		normal: basePath + 'magic/loop/attack_thrust/loop.png',
		behind: basePath + 'magic/loop/attack_thrust/background/loop.png'
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

//RANGED
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

const great_bow: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'ranged/bow/great/great.png',
	},
	walk: {
		size: 128,
		normal: basePath + 'ranged/bow/great/walk/foreground/great.png',
		behind: basePath + 'ranged/bow/great/walk/background/great.png'
	}
}

const recurve_bow: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'ranged/bow/recurve/recurve.png',
	},
	walk: {
		size: 128,
		normal: basePath + 'ranged/bow/recurve/walk/foreground/recurve.png',
		behind: basePath + 'ranged/bow/recurve/walk/background/recurve.png'
	}
}

//BLUNT
const flail: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'blunt/flail/flail.png',
		behind: basePath + 'blunt/flail/behind/flail.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'blunt/flail/attack_slash/flail.png',
		behind: basePath + 'blunt/flail/attack_slash/behind/flail.png'
	},
}

const mace: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'blunt/mace/mace.png',
		behind: basePath + 'blunt/mace/universal_behind/mace.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'blunt/mace/attack_slash/mace.png',
		behind: basePath + 'blunt/mace/attack_slash/behind/mace.png'
	},
}

const waraxe: LPCWeaponStrings = {
	universal: {
		normal: basePath + 'blunt/waraxe/waraxe.png',
		behind: basePath + 'blunt/waraxe/behind/waraxe.png'
	},
	slash: {
		size: 192,
		normal: basePath + 'blunt/waraxe/attack_slash/waraxe.png',
		behind: basePath + 'blunt/waraxe/attack_slash/behind/waraxe.png'
	},
}

export const lpcWeaponDictionary: LPCWeaponDictionary = {
	[LPCGender.male]: {
		dagger,
		normal_bow,
		great_bow,
		recurve_bow,
		simple_staff: simple_staff_male,
		gnarled,
		halberd,
		longsword,
		cane: cane_male,
		scythe,
		glowsword_blue,
		glowsword_red,
		katana,
		rapier,
		saber,
		scimitar,
		diamond,
		loop,
		flail,
		mace,
		waraxe
	},
	[LPCGender.female]: {
		dagger,
		normal_bow,
		great_bow,
		recurve_bow,
		simple_staff: simple_staff_female,
		gnarled,
		halberd,
		longsword,
		cane: cane_female,
		scythe,
		glowsword_blue,
		glowsword_red,
		katana,
		rapier,
		saber,
		scimitar,
		diamond,
		loop,
		flail,
		mace,
		waraxe
	}
};
