/** @type {import('tailwindcss').Config} */
module.exports = {
	//darkMode - here is needed so that it doesn't matter the settings of the pc, but what the
	//user chooses, via the button on the website
	darkMode: "class",
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				wavey: {
					"0%, 100%": {
						transform: "scaleY(0.5)",
					},
					"50%": {
						transform: "scaleY(1.5)",
					},
				},
			},
			// we will have access to the animation-wavey class,
			// we want to extend the class
			//infinite means it will keep working all the time
			animation: {
				wavey: "wavey 1000ms linear infinite",
			},
		},
	},
	plugins: [
		require("./plugins/openVariant"),
		require("./plugins/animationDelay"),
		require("./plugins/tableCaption"),
		require("./plugins/buttonPlugin"),
	],
};
