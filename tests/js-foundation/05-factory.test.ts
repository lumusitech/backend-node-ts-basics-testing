import { buildMakePerson } from '../../src/js-foundation/05-factory'

describe('js-foundation/05-factory', () => {
  const getUUID = () => '1234'
  const getAge = () => 43

  it('should contain a buildMakePerson', () => {
    expect(buildMakePerson).toBeDefined()
  })

  it('should return a function', () => {
    expect(typeof buildMakePerson).toBe('function')

    const makePerson = buildMakePerson({ getAge, getUUID })
    expect(typeof makePerson).toBe('function')
  })

  it('should return a person', () => {
    const makePerson = buildMakePerson({ getAge, getUUID })
    const person = makePerson({ name: 'John', birthdate: '1990-01-01' })

    expect(person).toEqual({
      id: '1234',
      name: 'John',
      birthdate: '1990-01-01',
      age: 43,
    })
  })
})
