import expect from 'expect.js'

const testData = [
  {
    in: [7, 8, 5],
    out: [5, 7, 8]
  },
  {
    in: [1, 8, 5],
    out: [1, 5, 8]
  },
  {
    in: [1, 2, 7, 3, 8, 5],
    out: [1, 2, 3, 5, 7, 8]
  },
  {
    in: [1, 2, 1000, 100, 10, 0, 3, 103, 101, 99],
    out: [0, 1, 2, 3, 10, 99, 100, 101, 103, 1000]
  },
  {
    in: [1, 2, 1000, 100, 10, 0, 3, 103, 101, 99, 1, 2, 1000, 100, 10, 0, 3, 103, 101, 99],
    out: [0, 0, 1, 1, 2, 2, 3, 3, 10, 10, 99, 99, 100, 100, 101, 101, 103, 103, 1000, 1000]
  },
  {
    in: [1, 2, 1000, 100, 10, 0, 3, 103, 101, 99, 1, 2, 1000, 100, 10, 0, 3, 103, 101, 99],
    out: [0, 0, 1, 1, 2, 2, 3, 3, 10, 10, 99, 99, 100, 100, 101, 101, 103, 103, 1000, 1000]
  },
  {
    in: [0],
    out: [0]
  },
  {
    in: [0, 0, 0],
    out: [0, 0, 0]
  }
]

generateMoreTestData()

export function generateMoreTestData() {
  const maxDataItems = 1000
  const maxLength = 200

  const maxNumber = 10e10

  let i = 0

  while (i < maxDataItems) {
    let j = 0
    const newIn = []

    while (j < maxLength) {
      newIn.push(Math.ceil(maxNumber * Math.random()))
      j++
    }

    const newOut = [...newIn].sort((a, b) => a - b)

    testData.push({
      in: newIn,
      out: newOut
    })

    i++
  }
}

export function testSortingFunction(f) {
  testData.forEach((d, i) => {
    expect(f([...d.in])).to.be.eql(d.out)
  })
}