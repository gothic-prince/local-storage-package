import { StorageLocal } from '../dist/index'
describe('StorageLocal', () => {
  const storage = new StorageLocal()

  it('should return false', () => {
    expect(storage.hasKey('user_id')).toBe(false)
  })
  it('should return true', () => {
    storage.setData('user_id', 5)
    expect(storage.hasKey('user_id')).toBe(true)
  })
  it('should return 5', () => {
    expect(storage.getData('user_id')).toBe(5)
  })
})
