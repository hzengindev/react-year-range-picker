import React, { useState } from 'react'
import { YearRangePicker } from 'react-year-range-picker'

interface IYearRange {
  startYear: number
  endYear: number
}

const Disabled = () => {
  const [yearRange, setYearRange] = useState<IYearRange>()
  const [disable, setDisable] = useState<boolean>(false)

  return (
    <div>
      <h2>Disabled Usage</h2>
      <YearRangePicker
        minYear={new Date().getFullYear() - 2}
        maxYear={new Date().getFullYear() + 2}
        onSelect={(startYear: number, endYear: number) => {
          setYearRange({ startYear, endYear })
        }}
        startYear={yearRange?.startYear}
        endYear={yearRange?.endYear}
        disable={disable}
      />
      <button
        type='button'
        onClick={() => setDisable((state) => !state)}
        style={{
          padding: '5px 8px',
          border: '1px solid #ddd',
          background: '#fff',
          fontSize: '16px',
          marginLeft: '16px',
          cursor: 'pointer'
        }}
      >
        Enable / Disable
      </button>
      <span style={{ marginLeft: '16px' }}>
        Selected Years : {yearRange?.startYear} - {yearRange?.endYear}
      </span>
    </div>
  )
}

export default Disabled
