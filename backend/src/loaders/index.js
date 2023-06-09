import expressLoader from './expressLoader'
import routesLoader from './routesLoader'

export default async (expressApp) => {

  await expressLoader(expressApp)
  routesLoader(expressApp)
}
