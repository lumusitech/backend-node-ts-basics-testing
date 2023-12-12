import { getAge } from '../../src/plugins/get-age.plugin'

describe('plugins/get-age.plugin', () => {
  it('should return a number', () => {
    const age = getAge('2000-01-01')

    expect(typeof age).toBe('number')
  })

  it('should return a current age', () => {
    const birthday = '2000-01-01'
    const age = getAge(birthday)
    const calculatedAge = new Date().getFullYear() - new Date(birthday).getFullYear()
    expect(age).toBe(calculatedAge)
  })

  it('should return 0 age', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2001)
    const birthdate = '2000-01-01'
    const age = getAge(birthdate)

    expect(spy).toHaveBeenCalled()
    expect(age).toBe(0)
  })
})
