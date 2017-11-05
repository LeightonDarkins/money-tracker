class EmptyAppCache {
  constructor (hash) {
    this.hash = hash
  }

  size () {
    return Buffer.byteLength(this.source(), 'utf8')
  }

  getManifestBody () {
    return ['NETWORK:\n*']
  }

  source () {
    return [
      'CACHE MANIFEST',
      `# ${this.hash}`,
      this.getManifestBody()
    ].join('\n')
  }
}

module.exports = EmptyAppCache
