#### npm is a package manager. It manages packages/dependencies that we install in our system to build our project.

#### package.json vs package-lock.json

package.json is a configuration for npm. It keeps a track of version of packages installed in our system. With the help of ^ and ~ these versions keep upgrading. Whereas package-lock.json keeps a track of exact version that is being installed. Also to avoid discrepancy it keeps a hash/integrity of same version so that same version is used in production.

### Bundlers

It combines many JavaScript code files into a single one that is production-ready loadable in the browser.

#### There are two types of dependencies - normal dependency and dev/development dependency.

Here in `"^2.10.2"` ^ is called krate and ~ is tilde. ^ takes care of minor version upgrade and ~ takes care of major version upgrade.

It is always recommended to use `^`.

#### node_modules contains the whole code of the depandency that we install plus the code of depandency of the depandency too (called transitive dependancy).

#### npm vs npx

npm means installing a package while npx means executing a package without having to install it.

#### CDN links is not a recommended way as it is an expensive operation.

Command to run parcel: `npx parcel index.html`

#### Parcel does a number of things ffor us:

1. Creates Development Build
2. Hosts Local server
3. HMR => Hot Module Replacement.(Automatically refreshing our browser.)
4. It uses a File Watching Algorithm written in C++, that keeps a watch on every changes made in the project.
5. Caching - Faster Builds
6. Image optimisation (Solves one of the ost expensive operation)
7. Minification of files
8. Bundling (Core feature)
9. Compress
10. Optimise
11. Consistent Hashing
12. Code splitting
13. Differential Bundling (to support older browsers)
14. Diagonistic 
15. Error Handling
16. With the help of parcel we can host our website on https as well
17. Tree shaking (Remove unused code)
18. Different dev and production bundles.
19. prod build command: `npm parcel build index.html`, if error remove main from script file.





