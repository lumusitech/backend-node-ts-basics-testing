import { emailTemplate } from '../../src/js-foundation/01-template'

describe('js-foundation/01-template', () => {
  it('should contain a greeting', () => {
    expect(emailTemplate).toContain('Hi,')
  })

  it('should contain a {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toContain('{{name}}')
    expect(emailTemplate).toContain('{{orderId}}')
  })
})
