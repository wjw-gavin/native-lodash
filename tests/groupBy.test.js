import { groupBy } from '../packages'

test('对象数组根据某个字段分类', () => {
  const arr = [
    {
      id: 1,
      state: 'online',
      create_time: '2022-04-24'
    },
    {
      id: 2,
      state: 'online',
      create_time: '2022-04-23'
    },
    {
      id: 3,
      state: 'online',
      create_time: '2022-04-23'
    },
    {
      id: 4,
      state: 'online',
      create_time: '2022-04-22'
    }
  ]

  const targetArr = {
    '2022-04-24': [{ id: 1, state: 'online', create_time: '2022-04-24' }],
    '2022-04-23': [
      { id: 2, state: 'online', create_time: '2022-04-23' },
      { id: 3, state: 'online', create_time: '2022-04-23' }
    ],
    '2022-04-22': [{ id: 4, state: 'online', create_time: '2022-04-22' }]
  }

  expect(groupBy(arr, 'create_time')).toStrictEqual(targetArr)
})
