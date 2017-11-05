/* eslint-env jest */

const AppCache = require('./AppCache')

describe('AppCache', () => {
  const hash = 'this is a dummy hash'
  let cacheEntries, networkEntries, fallbackEnteries, settingsEntries

  beforeEach(() => {
    cacheEntries = ['cache.test']
    networkEntries = ['network.test']
    fallbackEnteries = ['fallback.test']
    settingsEntries = ['prefer-online']
  })

  describe('getManifestBody()', () => {
    it('includes added assets', () => {
      const appCache = new AppCache()
      appCache.addAsset('test.asset')
      expect(appCache.getManifestBody()).toEqual('test.asset\n')
    })

    describe('CACHE section', () => {
      it('includes CACHE section items', () => {
        const appCache = new AppCache(cacheEntries)
        expect(appCache.getManifestBody()).toEqual('CACHE:\ncache.test\n')
      })

      it('excludes empty CACHE section', () => {
        const appCache = new AppCache([])
        expect(appCache.getManifestBody()).toEqual('')
      })
    })
  })

  describe('NETWORK section', () => {
    it('includes NETWORK section items', () => {
      const appCache = new AppCache(null, networkEntries)
      expect(appCache.getManifestBody()).toEqual('NETWORK:\nnetwork.test\n')
    })

    it('excludes empty NETWORK section', () => {
      const appCache = new AppCache(null, [])
      expect(appCache.getManifestBody()).toEqual('')
    })
  })

  describe('FALLBACK section', () => {
    it('includes FALLBACK section items', () => {
      const appCache = new AppCache(null, null, fallbackEnteries)
      expect(appCache.getManifestBody()).toEqual('FALLBACK:\nfallback.test\n')
    })

    it('excludes empty FALLBACK section', () => {
      const appCache = new AppCache(null, null, [])
      expect(appCache.getManifestBody()).toEqual('')
    })
  })

  describe('SETTINGS section', () => {
    it('includes SETTINGS section', () => {
      const appCache = new AppCache(null, null, null, settingsEntries)
      expect(appCache.getManifestBody()).toEqual('SETTINGS:\nprefer-online\n')
    })

    it('excludes empty SETTINGS section', () => {
      const appCache = new AppCache(null, null, null, [])
      expect(appCache.getManifestBody()).toEqual('')
    })
  })

  describe('source()', () => {
    let comment = '# version 2.17.0-8105-827a7b6-20160212045647'
    let appCache

    beforeEach(() => {
      appCache = new AppCache(cacheEntries, networkEntries, fallbackEnteries, settingsEntries, hash, comment)
    })

    it('includes webpack build hash', () => {
      expect(new RegExp(`# ${hash}`).test(appCache.source()), 'hash is not in source').toBeTruthy()
    })

    it('includes comment', () => {
      expect(new RegExp(comment).test(appCache.source()), 'comment is not in source').toBeTruthy()
    })

    it('includes manifest body', () => {
      expect(new RegExp(appCache.getManifestBody()).test(appCache.source()), 'manifest body not in source').toBeTruthy()
    })
  })

  describe('size()', () => {
    it('measures byte size', () => {
      const appCache = new AppCache(cacheEntries, networkEntries, fallbackEnteries, settingsEntries, hash)
      expect(appCache.size()).toEqual(130)
    })
  })
})
