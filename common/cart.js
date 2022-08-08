import Storage from '../utils/storage'

const addCart = (singleShopData) => {
  /**
   * 第一次存（没有）
   *        直接存储
   * 非第一次存 （有）
   *        判断有没有本次要添加的商品
   *          有
   *            商品的数量 +1
   *          没有
   *            在本地数据的基础之上在添加一条数据
   */
  const cartArray = []
  if (!hasLacalData()) {
    singleShopData.num = 1;
    cartArray.push(singleShopData)
    Storage.set('cart', cartArray)
  } else {
    const localData = Storage.get('cart')
    if (hasShopData(singleShopData, localData)) {
      localData.forEach(item => {
        if (item._id === singleShopData._id) {
          item.num += 1
        }
      })
    } else {
      singleShopData.num = 1
      localData.push(singleShopData)
    }
    Storage.set('cart', localData)
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

/**
 * 判断当前要添加的商品是否在本地存在
 */
const hasShopData = (singleData, localData) => {
  console.log(singleData, localData);
  const _data = localData.filter(item => {
    return item._id === singleData._id
  })
  return _data.length > 0 ? true : false
}

export { addCart }