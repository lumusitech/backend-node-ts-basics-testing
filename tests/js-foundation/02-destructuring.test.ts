import { characters } from '../../src/js-foundation/02-destructuring'

describe('js-foundation/02-destructuring', () => {
  it('should has a length of 4', () => {
    expect(characters).toHaveLength(4)
  })

  it('should contain Batman and Superman', () => {
    expect(characters).toContain('Batman')
    expect(characters).toContain('Superman')
  })

  it('should hast Flash as the first element and Superman as the second', () => {
    // expect(characters[0]).toBe('Flash')
    // expect(characters[1]).toBe('Superman')

    const [flash, superman] = characters
    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })
})
