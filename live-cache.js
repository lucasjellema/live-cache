const cache = { "_cacheCreationTime": new Date(), "_numberOfReads": 0, "_numberOfWrites": 0 }

const readFromCache = (cacheKey) => {
    let nor = cache['_numberOfReads'] + 1
    cache['_numberOfReads'] = nor
    const value = cache[cacheKey]!=null ? cache[cacheKey].value : {}
    return { "value": value }
}

const writeToCache = (cacheKey, value) => {
    let numberOfWrites = cache['_numberOfWrites'] + 1
    cache['_numberOfWrites'] = numberOfWrites
    let version = (cache[cacheKey]!=null ? cache[cacheKey].version : 0) + 1
    cache[cacheKey] = { value: value, timestamp: Date.now(), version: version }
    return { timestamp: cache[cacheKey].timestamp, version: cache[cacheKey].version }
}

const keyPrefixes = ["funny", "happy", "silly", "cute", "lucky", "pretty", "crazy", "outrageous"]

const startNewSession = () => {
    const sessionKey = keyPrefixes[Math.round(keyPrefixes.length * Math.random())] + Date.now()
    cache[sessionKey] = { value: {}, timestamp: Date.now(), version: 0 }
    return { sessionKey: sessionKey }
}


module.exports = {
    readFromCache: readFromCache,
    writeToCache: writeToCache,
    startNewSession: startNewSession

}