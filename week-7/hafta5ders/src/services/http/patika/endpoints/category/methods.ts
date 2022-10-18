import service from '../../instance'
import {
  CreateCategoryRequestPayload,
  CreateCategoryResponseType,
} from './types'

export const create = (
  payload: CreateCategoryRequestPayload
): Promise<CreateCategoryResponseType> => service.post('category', payload)

export const list = () => service.get('category')

export const update = (id: number, payload: CreateCategoryRequestPayload) =>
  service.put(`category/${id}`, payload)
