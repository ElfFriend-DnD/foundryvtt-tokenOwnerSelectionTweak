import { MODULE_ID, MySettings } from '../constants';
import { resetSight } from '../helpers';

export const registerSettings = function() {
	game.settings.register(MODULE_ID, MySettings.preserve, {
		name: 'Preserve owner selection on token creation',
		default: 0,
		type: Boolean,
		scope: 'world',
		config: true,
		hint: "Default Foundry behavior is to change the owners' selections to the created token when it is created.",
		onChange: value => resetSight()
	});
}
