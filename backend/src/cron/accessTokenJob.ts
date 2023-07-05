import cron, { ScheduledTask } from 'node-cron'
import { getAppAccessToken } from '../config/http'

export class accesTokenGeneratorJob {
  job: ScheduledTask

  constructor(expression: string) {
    this.job = cron.schedule(expression, async () => {
      await getAppAccessToken()
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
