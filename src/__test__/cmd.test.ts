import * as lisa from '../'

test('cmd echo', async () => {
  const res = await lisa.cmd('echo', ['hahaha'])
  console.log(res)
})

test('cmd error', async () => {
  try {
    const res = await lisa.cmd('ech', ['hahaha'])  
    console.log(res)
  } catch (error) {
    console.log(error)
  }
})
