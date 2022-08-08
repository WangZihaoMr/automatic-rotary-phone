import Storage from '../utils/storage'

const addCart = (singleShopData) => {
  const cartArray = []
  if (!hasLacalData()) {
    cartArray.push(singleShopData)
    Storage.set('cart', cartArray)
  }
}

/**
 * 检测本地有没有存储商品的数据，（第一次要存储的数据本地是否存在）
 */
const hasLacalData = () => {
  const carts = Storage.get('cart')
  const status = carts ? true : false
  return status
}

export { addCart }