/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module
 */

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import {log} from './helpers'
import {libWrapper} from './shim.js';
import { MODULE_ID } from './constants.js';
import { MySettings } from './enums.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	log(`Initializing ${MODULE_ID}`);

	// Register custom module settings
	registerSettings();
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function() {
	libWrapper.register(MODULE_ID, 'Token.prototype._onCreate', async (_onCreate, ...args) => {
		log('_onCreate called', {args, users: game.users});

		if (game.settings.get(MODULE_ID, MySettings.preserve)) {
			log('setting set, doing the thing');

			// Initialize Tokens on the Sight Layer if the Token could be a vision source or emits light
	canvas.sight.initializeTokens();
	canvas.lighting.update();

		} else {
			log('setting not set, doing the default');

			_onCreate(...args);
		}
	});
});

// Add any additional hooks if necessary
