import React, { useState } from 'react'
import { YearRangePicker } from 'react-year-range-picker'

interface IYearRange {
  startYear: number
  endYear: number
}

const Basic = () => {
  const [yearRange, setYearRange] = useState<IYearRange>()

  return (
    <div>
      <h2>Basic Usage</h2>
      <YearRangePicker
        minYear={new Date().getFullYear() - 2}
        maxYear={new Date().getFullYear() + 2}
        onSelect={(startYear: number, endYear: number) => {
          setYearRange({ startYear, endYear })
        }}
        startYear={yearRange?.startYear}
        endYear={yearRange?.endYear}
      />
      <span style={{ marginLeft: '16px' }}>
        Selected Years : {yearRange?.startYear} - {yearRange?.endYear}
      </span>
    </div>
  )
}

export default Basic
