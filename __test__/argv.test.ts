import { argv, flags } from '../src'
import lisa from '../src'

class FlagTest {
  @flags("name")
  async setName() {
    return "name"
  }
}

test('调用argv', async () => {
  expect(argv()).not.toBeNaN()

  lisa.application.argv.push("--name", "mj")
  expect(argv().name).toBe("mj")

  const flagTest = new FlagTest()
  const name = await flagTest.setName()
  expect(name).toBe("mj")
})