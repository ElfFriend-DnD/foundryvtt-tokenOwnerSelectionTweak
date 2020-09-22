import { MODULE_ID, MySettings } from '../constants';

export const registerSettings = function () {
  game.settings.register(MODULE_ID, MySettings.preserve, {
    name: 'Preserve token owner selection',
    default: true,
    type: Boolean,
    scope: 'client',
    config: true,
    hint: "Default Foundry behavior is to change the owners' selections to the created token when it is created.",
  });
};
