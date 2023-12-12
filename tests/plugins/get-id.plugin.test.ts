import { getUUID } from '../../src/plugins/get-id.plugin'
describe('plugins/get-id.plugin', () => {
  it('should return a string uuid with a length of 36', () => {
    const id = getUUID()
    expect(typeof id).toBe('string')
    expect(id.length).toBe(36)
  })

  // Is no necessary to test external libraries like uuid
  //   it('should return a different uuid', () => {
  //     const id1 = getUUID()
  //     const id2 = getUUID()

  //     expect(id1).not.toBe(id2)
  //   })
})
