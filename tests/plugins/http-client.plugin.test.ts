import { httpClient } from '../../src/plugins'
describe('plugins/http-client.plugin - httpClient.get', () => {
  it('should return a todo object', async () => {
    const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    expect(data).toEqual({
      id: 1,
      userId: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean),
    })
  })

  it('should has POST, PUT and DELETE methods', async () => {
    console.log(httpClient)
    expect(httpClient).toEqual({
      get: expect.any(Function),
      post: expect.any(Function),
      put: expect.any(Function),
      delete: expect.any(Function),
    })
  })
})
