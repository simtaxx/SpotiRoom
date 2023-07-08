import request from 'supertest'
import nock from 'nock'
import app from '../../../src/index'
import { afterEach } from 'node:test'

describe('GET /albums', () => {
  const headers = {
    Authorization: '123',
  }

  afterEach(() => {
    nock.cleanAll()
  })

  it('should return 401 because invalid authorization header', async () => {
    nock('https://api.spotify.com/v1')
      .get('/me/albums')
      .reply(401, {
        error: {
          status: 401,
          message: 'Invalid authorization header'
        }
      })

    const { status } = await request(app).get('/albums').set(headers)
    expect(status).toBe(401)
  })

  it('should return 200', async () => {
    nock('https://api.spotify.com/v1')
      .get('/me/albums')
      .reply(200, {
        items: []
      })

    const { status } = await request(app).get('/albums').set(headers)
    expect(status).toBe(200)
  })

  it('should return empty items array', async () => {
    nock('https://api.spotify.com/v1')
      .get('/me/albums')
      .reply(200, {
        items: []
      })

    const { body } = await request(app).get('/albums').set(headers)
    expect(body).toStrictEqual([])
  })

  it('should return 401 because no authorization header', async () => {
    nock('https://api.spotify.com/v1')
      .get('/me/albums')
      .reply(401)

    const { status } = await request(app).get('/albums')
    expect(status).toBe(401)
  })
})
