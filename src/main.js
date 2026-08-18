import plugin from "../plugin.json";

class AcodePlugin {
	baseUrl = "";

	async init(_page, _cacheFile, _cacheFileUrl) {
		// plugin initialisation
	}

	async destroy() {
		// plugin clean up
	}
}

if (window.acode) {
	const acodePlugin = new AcodePlugin();

	acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		acodePlugin.baseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
		await acodePlugin.init($page, cacheFile, cacheFileUrl);
	});

	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy();
	});
}
