# react-year-range-picker

> A simple year range picker component for React.

[![NPM](https://img.shields.io/npm/v/react-year-range-picker.svg)](https://www.npmjs.com/package/react-year-range-picker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Live Demo

[CodeSanbox](https://codesandbox.io/s/kind-hooks-0tgb8)

## Introduction

![scr1](https://raw.githubusercontent.com/hzengindev/react-year-range-picker/main/img/scr1.png)

![scr2](https://raw.githubusercontent.com/hzengindev/react-year-range-picker/main/img/scr2.png)

## Install

```bash
npm install --save react-year-range-picker
```

## Usage

### Basic

```tsx
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
```

### Disabled

```tsx
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
```

### Custom Styled

```tsx
import React, { useState } from 'react'
import { YearRangePicker } from 'react-year-range-picker'

interface IYearRange {
  startYear: number
  endYear: number
}

const CustomStyle = () => {
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
        style={{ maxWidth: '300px', width: '100%' }}
        classNames='custom-year-range-picker'
        selectedColor='#0963b5'
      />
      <span style={{ marginLeft: '16px' }}>
        Selected Years : {yearRange?.startYear} - {yearRange?.endYear}
      </span>
    </div>
  )
}

export default CustomStyle
```

```css
.custom-year-range-picker .yrp-picker-box {
  border-radius: 20px;
  background-color: #1890ff;
  color: #fff;
}

.custom-year-range-picker .yrp-picker-box span {
  color: #fff;
}

.custom-year-range-picker .yrp-picker-box i {
  border-color: #fff;
}
```

### Custom Text

```tsx
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
```

## License

MIT © [hzengindev](https://github.com/hzengindev)
