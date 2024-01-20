;(async () => {
  async function f() {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved')
      }, 1000)
    })

    console.log(res)

    return 'something'
  }

  await f()

  console.log('DONE')
})()
