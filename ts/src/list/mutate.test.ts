import { updateItems, removeItems } from './mutate'

test('updateItems', () => {
  const createList = () => [2, 4, 9]

  expect(updateItems(createList(), [0], v => 999)).toEqual([999, 4, 9])
  expect(updateItems(createList(), [], v => 999)).toEqual(createList())
  expect(updateItems(createList(), [0, 1, 2], v => 999)).toEqual([999, 999, 999])
})

test('removeItems', () => {
  const createList = () => [2, 4, 9]
  expect(removeItems(createList(), [0])).toEqual([4, 9])
  expect(removeItems(createList(), [])).toEqual(createList())
  expect(removeItems(createList(), [0, 1, 2])).toEqual([])
})
