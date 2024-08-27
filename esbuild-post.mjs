import fs from "fs";
import path from "path";
import url from "url";

export default function post() {
	const __filename = url.fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const modname = path.basename(__dirname);
	const destDir = "D:/Programming/CrossCodeModding/CrossCode CCL2 nwjs 0.35.5 dev/assets/mods/";
	const from = path.join(__dirname, `dist/${modname}.ccmod`);
	const to = path.join(destDir, `${modname}.ccmod`);
	fs.copyFileSync(from, to);
	console.log(`Moved ${from} to ${to}, ${fs.existsSync(to)}`);
}