import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin'

describe('plugins/logger.plugin', () => {
  it('should return a function', () => {
    const logger = buildLogger('app.js')

    expect(logger).toEqual({
      log: expect.any(Function),
      error: expect.any(Function),
    })

    //or
    expect(typeof logger.log).toBe('function')
    expect(typeof logger.error).toBe('function')
  })

  it('should call log with level, message and service', () => {
    // Arrange
    const winstonSpyLogger = jest.spyOn(winstonLogger, 'log')
    const service = 'test service'
    const myLogger = buildLogger(service)

    const message = 'test message'

    // Act
    myLogger.log(message)

    // Assert
    expect(winstonSpyLogger).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      }),
    )
  })

  it('should call error with level, message and service', () => {
    const winstonSpyLogger = jest.spyOn(winstonLogger, 'error')
    const service = 'test service'
    const myLogger = buildLogger(service)

    const message = 'test message'

    myLogger.error(message)

    expect(winstonSpyLogger).toHaveBeenCalledWith(
      'error',
      expect.objectContaining({
        message,
        service,
      }),
    )
  })
})
