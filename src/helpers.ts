import { MODULE_ID } from "./constants";

export function log(...args) {
  console.log(MODULE_ID, '|', ...args)
}

export function resetSight() {
	// Initialize Tokens on the Sight Layer
	canvas.sight.initializeTokens();
	canvas.lighting.update();
};