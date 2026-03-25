import { POST } from '@/app/api/contact/route'
import { NextRequest } from 'next/server'

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'mock-id' }, error: null }),
    },
  })),
}))

process.env.RESEND_API_KEY = 'test-key'
process.env.RESEND_TO_EMAIL = 'test@example.com'

function makeRequest(body: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  it('returns 200 for valid input', async () => {
    const req = makeRequest({ name: 'Alice', email: 'alice@example.com', message: 'Hello there' })
    const res = await POST(req)
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toEqual({ success: true })
  })

  it('returns 400 when name is missing', async () => {
    const req = makeRequest({ email: 'alice@example.com', message: 'Hello' })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/name/i)
  })

  it('returns 400 when email is missing', async () => {
    const req = makeRequest({ name: 'Alice', message: 'Hello' })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/email/i)
  })

  it('returns 400 when message is missing', async () => {
    const req = makeRequest({ name: 'Alice', email: 'alice@example.com' })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data.error).toMatch(/message/i)
  })
})
