export function removeListItemByIdx<T>(list: T[], willRemoveIdx: number) {
  return list.filter((item, idx) => {
    return idx !== willRemoveIdx
  })
}
