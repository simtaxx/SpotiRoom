export interface RError {
  response: {
    data: {
      error:{
        status: number,
        message: string
      }
    }
  }
}