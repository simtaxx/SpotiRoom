type IFetchAlbums = (accessToken: string) => Promise<unknown>

class IAlbums {
  fetchAlbums: IFetchAlbums = async () => {
    throw new Error('fetchAlbums must be implemented')
  }
}
  
export default IAlbums
