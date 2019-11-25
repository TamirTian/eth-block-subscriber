# block-subscriber
Subscribe Highest Block
```js
const Subscriber = require('./block-sub')
const subscriber = new Subscriber('<ETH_RPC>')

async function main () {
  await subscriber.start()
  console.log(subscriber.get())
  console.log(subscriber.get())
  setTimeout(()=> console.log(subscriber.get()), 20 * 1000)
}

main()
```
