const AppCache = require('./AppCache')
const EmptyAppCache = require('./EmptyAppCache')

class AppCachePlugin {
  constructor ({
    empty,
    cache,
    network = ['*'],
    fallback,
    settings,
    exclude = [],
    output = 'manifest.appcache',
    comment
  } = {}) {
    this.empty = empty
    this.cache = cache
    this.network = network
    this.fallback = fallback
    this.settings = settings
    this.output = output
    this.comment = comment ? `# ${comment}\n` : ''

    // Convert exclusion strings to RegExp.
    this.exclude = exclude.map(exclusion => {
      if (exclusion instanceof RegExp) return exclusion
      return new RegExp(`^${exclusion}$`)
    })
  }

  apply (compiler) {
    // console.log('AppCachePlugin: Applying...')

    const {options: {output: outputOptions = {}} = {}} = compiler
    const {publicPath = ''} = outputOptions

    compiler.plugin('emit', (compilation, callback) => {
      if (this.empty) {
        // console.log(`${this.constructor.name}: Empty ApplicationCache`)

        compilation.assets[this.output] = new EmptyAppCache(compilation.hash)

        callback()
      } else {
        // console.log(`${this.constructor.name}: Populated ApplicationCache`)

        const appCache = new AppCache(this.cache, this.network, this.fallback, this.settings, compilation.hash, this.comment)

        Object.keys(compilation.assets)
          .filter(asset => !this.exclude.some(pattern => pattern.test(asset)))
          .forEach(asset => appCache.addAsset(publicPath + asset))

        compilation.assets[this.output] = appCache

        callback()
      }
    })
  }
}

module.exports = AppCachePlugin
