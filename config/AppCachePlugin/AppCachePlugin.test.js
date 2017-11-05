/* eslint-env jest */

import AppCachePlugin from './AppCachePlugin'
import AppCache from './AppCache'
import EmptyAppCache from './EmptyAppCache'

const DEFAULT_MANIFEST_NAME = 'manifest.appcache'

describe('AppCachePlugin', () => {
  describe('constructor', () => {
    describe('cache option', () => {
      it('is undefined by default', () => {
        const plugin = new AppCachePlugin()
        expect(plugin.cache).toBeUndefined()
      })

      it('accepts CACHE section entries', () => {
        const plugin = new AppCachePlugin({cache: ['cache.test']})
        expect(plugin.cache).toHaveLength(1)
        expect(plugin.cache[0]).toEqual('cache.test')
      })
    })

    describe('network option', () => {
      it('allows all (*) by default', () => {
        const plugin = new AppCachePlugin()
        expect(plugin.network).toHaveLength(1)
        expect(plugin.network[0]).toEqual('*')
      })

      it('accepts NETWORK section entries', () => {
        const plugin = new AppCachePlugin({network: ['network.test']})
        expect(plugin.network).toHaveLength(1)
        expect(plugin.network[0]).toEqual('network.test')
      })
    })

    describe('fallback option', () => {
      it('is undefined by default', () => {
        const plugin = new AppCachePlugin()
        expect(plugin.fallback).toBeUndefined()
      })

      it('accepts FALLBACK section entries', () => {
        const plugin = new AppCachePlugin({fallback: ['fallback.test']})
        expect(plugin.fallback).toHaveLength(1)
        expect(plugin.fallback[0]).toEqual('fallback.test')
      })
    })

    describe('settings option', () => {
      it('is undefined by default', () => {
        const plugin = new AppCachePlugin()
        expect(plugin.settings).toBeUndefined()
      })

      it('accepts SETTINGS section entries', () => {
        const plugin = new AppCachePlugin({settings: ['prefer-online']})
        expect(plugin.settings).toHaveLength(1)
        expect(plugin.settings[0]).toEqual('prefer-online')
      })
    })

    describe('exclude option', () => {
      it('is an empty Array by default', () => {
        const plugin = new AppCachePlugin()
        expect(plugin.exclude).toHaveLength(0)
      })

      it('accepts a list of exclude patterns (compiled to RegExp)', () => {
        const plugin = new AppCachePlugin({exclude: ['something', /somethingelse/]})

        expect(plugin.exclude).toHaveLength(2)

        expect(plugin.exclude[0] instanceof RegExp).toBeTruthy()
        expect(plugin.exclude[0].toString()).toEqual('/^something$/')

        expect(plugin.exclude[1] instanceof RegExp).toBeTruthy()
        expect(plugin.exclude[1].toString()).toEqual('/somethingelse/')
      })
    })

    describe('output option', () => {
      it('is manifest.appcache by default', () => {
        const plugin = new AppCachePlugin()
        expect(plugin.output).toEqual(DEFAULT_MANIFEST_NAME)
      })
    })
  })

  describe('apply()', () => {
    let compiler, compilation, cb, cbWasCalled

    beforeEach(() => {
      cbWasCalled = false
      cb = () => { cbWasCalled = true }

      compilation = {
        assets: {'test.asset': null}
      }

      compiler = {
        plugin (_, fn) { fn(compilation, cb) }
      }
    })

    it('creates a new AppCache compilation asset', () => {
      new AppCachePlugin().apply(compiler)
      expect(Object.keys(compilation.assets)).toHaveLength(2)
      expect(compilation.assets[DEFAULT_MANIFEST_NAME]).toBeDefined()
      expect(compilation.assets[DEFAULT_MANIFEST_NAME] instanceof AppCache).toBeTruthy()
    })

    it('names the asset as specified by the output option', () => {
      const OUTPUT_NAME = 'my-special-manifest.appcache'
      new AppCachePlugin({output: OUTPUT_NAME}).apply(compiler)

      expect(compilation.assets[DEFAULT_MANIFEST_NAME]).toBeUndefined()
      expect(compilation.assets[OUTPUT_NAME]).toBeDefined()
      expect(compilation.assets[OUTPUT_NAME] instanceof AppCache).toBeTruthy()
    })

    describe('empty property', () => {
      it('returns an EmptyAppCache when the empty property is true', () => {
        new AppCachePlugin({ empty: true }).apply(compiler)

        expect(compilation.assets[DEFAULT_MANIFEST_NAME] instanceof EmptyAppCache).toBeTruthy()
      })

      it('returns an AppCache when the empty property is false', () => {
        new AppCachePlugin({ empty: false }).apply(compiler)

        expect(compilation.assets[DEFAULT_MANIFEST_NAME] instanceof AppCache).toBeTruthy()
      })
    })

    it('it adds compilation assets to the app cache', () => {
      new AppCachePlugin().apply(compiler)
      const appCache = compilation.assets[DEFAULT_MANIFEST_NAME]
      expect(appCache).toBeDefined()
      expect(appCache.assets).toHaveLength(1)
      expect(appCache.assets[0]).toEqual('test.asset')
    })

    it('excludes compilation assets that match an exclude pattern', () => {
      new AppCachePlugin({exclude: [/asset/]}).apply(compiler)
      const appCache = compilation.assets[DEFAULT_MANIFEST_NAME]
      expect(appCache.assets).toHaveLength(0)
    })

    it('excludes compilation assets that match an exclude string', () => {
      new AppCachePlugin({exclude: ['test.asset']}).apply(compiler)
      const appCache = compilation.assets[DEFAULT_MANIFEST_NAME]
      expect(appCache.assets).toHaveLength(0)
    })

    it('calls the apply callback', () => {
      new AppCachePlugin().apply(compiler)
      expect(cbWasCalled).toBeTruthy()
    })

    it('incorporates the output.publicPath option', () => {
      compiler.options = {output: {publicPath: '/test/'}}
      new AppCachePlugin().apply(compiler)
      const appCache = compilation.assets[DEFAULT_MANIFEST_NAME]
      expect(appCache.assets[0]).toEqual('/test/test.asset')
    })
  })
})
