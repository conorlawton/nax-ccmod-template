import fs from "fs";
import path from "path";
import url from "url";

export default function post() {
	const __filename = url.fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const modname = path.basename(__dirname);
	const destDir = "YOU SHOULD CHANGE THIS TO BE WHERE YOUR MODS FOLDER IS: blah/CrossCode/assets/mods";
	const from = path.join(__dirname, `dist/${modname}.ccmod`);
	const to = path.join(destDir, `${modname}.ccmod`);
	fs.copyFileSync(from, to);
	console.log(`Moved ${from} to ${to}, ${fs.existsSync(to)}`);
}
