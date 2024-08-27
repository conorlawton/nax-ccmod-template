import "ultimate-crosscode-typedefs/modloader";
import "ultimate-crosscode-typedefs/crosscode";
import "./headers/**/*.d.ts";

export { };

declare global {
	interface Window {
		nax: any
	}

	namespace nax {
		namespace change_me {

		}
	}
}
