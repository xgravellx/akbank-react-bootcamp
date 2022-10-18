export type CreateCategoryRequestPayload = {
  title: string
}

export type CreateCategoryResponseType = {
  data: {
    id: number
    title: string
  }
}
