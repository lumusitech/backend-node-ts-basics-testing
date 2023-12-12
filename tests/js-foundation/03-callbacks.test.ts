import { getUserById } from '../../src/js-foundation/03-callbacks'

describe('js-foundation/03-callbacks', () => {
  it('should return an error if user not found', () => {
    const id = 10

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`)
      expect(user).toBeUndefined()
    })
  })

  it('should return a user if found', () => {
    const id = 1

    const user = {
      id: 2,
      name: 'Jane Doe',
    }

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined()
      expect(user).toEqual(user)
    })
  })
})
