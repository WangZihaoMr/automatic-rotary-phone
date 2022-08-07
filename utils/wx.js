function wxToPromise(method = 'request', options = {}) {
  return new Promise((reslove, reject) => {
    options.success = reslove
    options.fail = reject
    wx[method](options)
  })
}

export default wxToPromise