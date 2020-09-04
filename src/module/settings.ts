import {MODULE_ID} from '../constants';

const resetSight = function() {
	// Re-initialize all tokens in the scene
	// TODO: Only re-initialize the controlled tokens?
	canvas.sight.initializeTokens();
};

export const registerSettings = function() {

	// Register any custom module settings here

	game.settings.register(MODULE_ID, 'preserve-owner-selection', {
		name: 'Preserve owner selection on token creation',
		default: 0,
		type: Boolean,
		scope: 'world',
		config: true,
		hint: "Default Foundry behavior is to change the owners' selections to the created token when it is created.",
		onChange: value => resetSight()
	});
}
