import { getAppAccessToken } from '../config/http'
import { accesTokenGeneratorJob } from '../cron/accessTokenJob'
import expressLoader from './expressLoader'
import routesLoader from './routesLoader'

export default async (expressApp) => {

  await expressLoader(expressApp)
  routesLoader(expressApp)
  await getAppAccessToken()
  
  const accessTokenJob = new accesTokenGeneratorJob('*/55 * * * *')
  accessTokenJob.start()
}
