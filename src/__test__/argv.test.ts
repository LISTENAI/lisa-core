import { application, argv, flags } from '../'

class FlagTest {
  @flags("name")
  async setName() {
    return "name"
  }
}

test('调用argv', async () => {
  expect(argv()).not.toBeNaN()

  application.argv.push("--name", "mj")
  expect(argv().name).toBe("mj")

  const flagTest = new FlagTest()
  const name = await flagTest.setName()
  expect(name).toBe("mj")
})