//needed to create this as animation delay doesn't exist
//out of the box in Tailwind
const plugin = require("tailwindcss/plugin");

//dynamic utility
const animationDelay = plugin(
	function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				//it's a dynamic utility class
				"animation-delay": (value) => {
					return {
						//we want to return an object
						animationDelay: value,
					};
				},
			},
			{
				//this function refers the animationDelay values
				// that was created below
				values: theme("animationDelay"),
			}
		);
	},
	{
		theme: {
			animationDelay: {
				100: "100ms",
				200: "200ms",
				300: "300ms",
				400: "400ms",
				500: "500ms",
				600: "600ms",
				700: "700ms",
				800: "800ms",
				900: "900ms",
				1000: "1000ms",
			},
		},
	}
);

module.exports = animationDelay;
