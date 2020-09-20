import { registerSettings } from './module/settings.js';
import { log, resetSight } from './helpers';
import { libWrapper } from './shim.js';
import { MODULE_ID, MySettings } from './constants.js';

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
  log(`Initializing ${MODULE_ID}`);

  // Register custom module settings
  registerSettings();
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function () {
  libWrapper.register(MODULE_ID, 'Token.prototype._onCreate', async (_onCreate, ...args) => {
    if (game.settings.get(MODULE_ID, MySettings.preserve)) {
      // Initialize Tokens on the Sight Layer but nothing else.
      resetSight();
    } else {
      // do Foundry default, which will select the token if the user is the Owner
      _onCreate(...args);
    }
  });
});
