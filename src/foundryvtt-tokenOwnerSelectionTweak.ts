import { registerSettings } from './module/settings.js';
import { log } from './helpers';
import { libWrapper } from './shim.js';
import { MODULE_ID, MySettings } from './constants.js';

async function _onCreateOverride(_onCreate, ...args) {
  if (game.settings.get(MODULE_ID, MySettings.preserve)) {
    // Initialize Tokens on the Sight Layer if the Token could be a vision source or emits light
    if ((this.data.vision && this.observer) || this.emitsLight) {
      canvas.sight.initializeTokens();
      canvas.lighting.update();
    }

    this.visible = this.isVisible;
  } else {
    // do Foundry default, which will select the token if the user is the Owner
    _onCreate(...args);
  }
}

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
  libWrapper.register(MODULE_ID, 'Token.prototype._onCreate', _onCreateOverride);
});
