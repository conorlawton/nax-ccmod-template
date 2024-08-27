/// <reference path="global.d.ts" />

import { Mod, PluginClass } from "ultimate-crosscode-typedefs/modloader/mod";

export default class Item implements PluginClass {
	mod: Mod;

	constructor(mod: Mod) {
		this.mod = mod;

		window.nax ??= {};
		window.nax.change_me ??= {};

		console.log("Hello world from the mod template!");
	}

	prestart() {
	}
}
