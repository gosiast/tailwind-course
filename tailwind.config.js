/** @type {import('tailwindcss').Config} */
module.exports = {
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
			//animation-wavey, we want to extend the class
			//infinite means it will keep working all the time
			animation: {
				wavey: "wavey 1s linear infinite",
			},
		},
	},
	plugins: [
		require("./plugins/openVariant"),
		require("./plugins/animationDelay"),
	],
};
