const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
<<<<<<< HEAD
exports.REMOTE_DISTRO_URL = 'http://fi1ya2dfn6jca3dha4d6f.mcv.kr:1786/Nebula/distribution.json'
=======
exports.REMOTE_DISTRO_URL = 'http://flowhost.kro.kr:1786/Nebula/distribution.json'
>>>>>>> 0b02d74fb25b6d024e36fdcf867f3342dcb33090

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api