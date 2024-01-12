const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
	addVariant("group-open");
});
