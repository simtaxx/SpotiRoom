import cron from 'node-cron'
import { getAccessToken } from '../config/http'

export class accesTokenGeneratorJob {
  constructor(expression) {
    this.job = cron.schedule(expression, async () => {
      await getAccessToken()
    },
    {
      scheduled: true,
      timezone: 'Europe/Paris'
    })
  }

  start = () => {
    this.job.start()
  }

  stop = () => {
    this.job.stop()
  }
}
