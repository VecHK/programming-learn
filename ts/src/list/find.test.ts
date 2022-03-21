import { findList, findOne } from './find'

test('findList', () => {
  const sampleList = [2, 4, 9, 9, 10]
  expect(findList(sampleList, item => item === 2)).toEqual([0])
  expect(findList(sampleList, item => item > 2)).toEqual([1, 2, 3, 4])
  expect(findList(sampleList, item => false)).toEqual([])
  expect(findList(sampleList, item => item === 9)).toEqual([2, 3])
})

test('findList, Object Element input', () => {
  function createObj(name: string) {
    return { name, d: Date.now() }
  }

  const sampleList: Array<{ name: string, d: number }> = [
    createObj('tim'),
    createObj('bob'),
    createObj('john'),
    createObj('john'),
    createObj('petter'),
  ]
  expect(findList(sampleList, item => item.name === 'tim')).toEqual([0])
  expect(findList(sampleList, item => item.name === 'john')).toEqual([2, 3])
  expect(findList(sampleList, item => item.name === 'not found')).toEqual([])
})

test('findList, 2d Array input', () => {
  const sampleList = [
    [1, 2],
    [4, 9],
    [4, 9],
    [10, 10]
  ]

  expect(
    findList(sampleList, arr => arr.join('') === '12')
  ).toEqual([0])
  expect(
    findList(sampleList, arr => arr.join('') === '49')
  ).toEqual([1, 2])
  expect(
    findList(sampleList, arr => arr.join('') === 'not found')
  ).toEqual([])
})

test('findOne', () => {
  const sampleList = [2, 4, 9, 9, 10]
  expect(findOne(sampleList, item => item === 2)).toBe(0)
  expect(findOne(sampleList, item => item > 2)).toBe(1)
  expect(findOne(sampleList, item => false)).toBe(-1)
  expect(findOne(sampleList, item => item === 9)).toBe(2)
})

test('findOne, Object Element input', () => {
  function createObj(name: string) {
    return { name, d: Date.now() }
  }

  const sampleList: Array<{ name: string, d: number }> = [
    createObj('tim'),
    createObj('bob'),
    createObj('john'),
    createObj('john'),
    createObj('petter'),
  ]
  expect(findOne(sampleList, item => item.name === 'tim')).toBe(0)
  expect(findOne(sampleList, item => item.name === 'john')).toBe(2)
  expect(findOne(sampleList, item => item.name === 'not found')).toBe(-1)
})

test('findOne, 2d Array input', () => {
  const sampleList = [
    [1, 2],
    [4, 9],
    [4, 9],
    [10, 10]
  ]

  expect(
    findOne(sampleList, arr => arr.join('') === '12')
  ).toBe(0)
  expect(
    findOne(sampleList, arr => arr.join('') === '49')
  ).toBe(1)
  expect(
    findOne(sampleList, arr => arr.join('') === 'not found')
  ).toBe(-1)
})
