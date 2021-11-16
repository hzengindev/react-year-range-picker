import React, { useState } from 'react'
import { YearRangePicker } from 'react-year-range-picker'

interface IYearRange {
  startYear: number
  endYear: number
}

const CustomText = () => {
  const [yearRange, setYearRange] = useState<IYearRange>()

  return (
    <div>
      <h2>Styled Usage</h2>
      <YearRangePicker
        minYear={new Date().getFullYear() - 2}
        maxYear={new Date().getFullYear() + 2}
        onSelect={(startYear: number, endYear: number) => {
          setYearRange({ startYear, endYear })
        }}
        startYear={yearRange?.startYear}
        endYear={yearRange?.endYear}
        spacer='#'
        startText='Start Year'
        endText='End Year'
      />
      <span style={{ marginLeft: '16px' }}>
        Selected Years : {yearRange?.startYear} - {yearRange?.endYear}
      </span>
    </div>
  )
}

export default CustomText
