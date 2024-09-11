import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{
		languageOptions: {
			// Extend both browser and jest globals
			globals: {
				...globals.browser,  // Keep browser globals if you still need them
				...globals.jest      // Add Jest globals (test, expect, etc.)
			},
		},
	},
	pluginJs.configs.recommended, // Recommended JS config

];
