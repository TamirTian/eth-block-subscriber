const caller = require('./caller');

class BlockSubscriber {
  constructor (rpc) {
    this.rpc = rpc
  }

  async start () {
    const that = this
    that.timer = setInterval(async () => {
      that.highest = await caller.getHighest(this.rpc)
    }, 2000)

    function waitForLoad (call) {
      if (that.highest) call()
      setTimeout(() => waitForLoad(call), 500)
    }

    return new Promise((resolve) => {
      waitForLoad(resolve)
    })
  }

  get () {
    return this.highest
  }

  stop () {
    if (this.timer) clearInterval(this.timer)
  }
}

module.exports = BlockSubscriber
