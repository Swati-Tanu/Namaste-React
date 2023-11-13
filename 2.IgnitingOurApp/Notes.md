#### npm is a package manager. It manages packages/dependencies that we install in our system to build our project.

#### package.json vs package-lock.json
package.json is a configuration for npm. It keeps a track of version of packages installed in our system. With the help of ^ and ~ these versions keep upgrading. Whereas package-lock.json keeps a track of exact version that is being installed. Also to avoid discrepancy it keeps a hash/integrity of same version so that same version is used in production.

### Bundlers
It combines many JavaScript code files into a single one that is production-ready loadable in the browser.

#### There are two types of dependencies - normal dependency and dev/development dependency.

Here in `"^2.10.2"` ^ is called krate and ~ is tilde. ^ takes care of minor version upgrade and ~ takes care of major version upgrade.

It is always recommended to use `^`.


#### node_modules contains the whole code of the depandency that we install plus the code of depandency of the depandency too (called transitive dependancy).

