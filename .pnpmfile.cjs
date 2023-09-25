// It's currently necessary to override the @react-navigation/elements deps required
// by @react-navigation/stack, because of some dodgy cjs asset imports which break the
// production build.
// Yarn users could put this package resolution inside `resolutions` within `package.json`
// instead.

function readPackage(pkg) {
    if (pkg.dependencies && pkg.dependencies['@react-navigation/elements']) {
        pkg.dependencies['@react-navigation/elements'] = 'github:jkhaui/react-navigation-lite#react-navigation-elements-v2.0.0-alpha.10-gitpkg'
    }
    return pkg
}

module.exports = {
    hooks: {
        readPackage
    }
}