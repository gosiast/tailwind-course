const plugin = require("tailwindcss/plugin");

const openVariant = plugin(function ({ addVariant }) {
	addVariant("group-open", ":merge(.group).open &");
});

// to export the plugin
module.exports = openVariant;
