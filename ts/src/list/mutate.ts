
export function updateItems<Item extends unknown>(
  list: Item[],
  idxList: number[],
  updateFn: (item: Item) => Item
) {
  const newList = [...list]
  idxList.forEach(idx => {
    newList[idx] = updateFn(newList[idx])
  })
  return newList
}

export function removeItems<Item extends unknown>(
  list: Item[],
  idxList: number[]
) {
  return list.filter((_, idx) => idxList.indexOf(idx) === -1)
}
