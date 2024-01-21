const plugin = require("tailwindcss/plugin");

//https://tailwindcss.com/docs/theme
//more info about how can we use theme
const buttonPlugin = plugin(function ({
	addComponents,
	matchComponents,
	theme,
}) {
	addComponents({
		".btn": {
			display: "inline-block",
			cursor: "pointer",
			fontWeight: "bold",
			//it's easier to to refence values if property key doesn't contain
			//dots within it
			padding: `${theme("spacing")["2"]} ${theme("spacing")["4"]}`,
			//lg because I want to access large border radius
			borderRadius: theme("borderRadius").lg,
		},
	});
});
module.exports = buttonPlugin;
