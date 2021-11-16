import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

export interface YearRangePickerProps {
  minYear: number
  maxYear: number
  startYear?: number | undefined
  endYear?: number | undefined
  disable?: boolean
  style?: React.CSSProperties
  classNames?: string
  spacer?: string
  startText?: string
  endText?: string
  selectedColor?: string
  onSelect?: (startYear: number, endYear: number) => void
}

export const YearRangePicker = ({
  minYear,
  maxYear,
  startYear,
  endYear,
  disable,
  style,
  classNames = '',
  spacer = '/',
  startText = 'Start',
  endText = 'End',
  selectedColor = '#1890ff',
  onSelect
}: YearRangePickerProps): JSX.Element => {
  const [years, setYears] = useState<Array<number>>([])
  const [selectedStartYear, setSelectedStartYear] = useState<number>(0)
  const [selectedEndYear, setSelectedEndYear] = useState<number>(0)
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const setInitialYear = (_minYear: number = 0, _maxYear: number = 0) => {
    const _years: Array<number> = []
    for (let _year: number = _minYear; _year <= _maxYear; _year++)
      _years.push(_year)
    setYears(_years.reverse())
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Element)
    )
      setOptionsVisible(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  useEffect(() => {
    setInitialYear(minYear, maxYear)
  }, [minYear, maxYear])

  useEffect(() => {
    setSelectedStartYear(startYear ? startYear : 0)
    setSelectedEndYear(endYear ? endYear : 0)
  }, [startYear, endYear])

  const handleSelect = (start: number, end: number) => {
    if (start !== 0 && end !== 0) {
      setOptionsVisible(false)
      if (onSelect) onSelect(start, end)
    }
  }

  const renderStartYearPicker = () => {
    return (
      <ListContainer>
        <span>{startText}</span>
        <List>
          {years.map((year) => (
            <ListItem
              key={year}
              selectedColor={selectedColor}
              className={`${selectedStartYear === year && 'selected'}
              ${selectedEndYear !== 0 && selectedEndYear < year && 'disable'}`}
              onClick={() => {
                handleSelect(year, selectedEndYear)
                setSelectedStartYear(year)
              }}
            >
              {year}
            </ListItem>
          ))}
        </List>
      </ListContainer>
    )
  }

  const renderEndYearPicker = () => {
    return (
      <ListContainer>
        <span>{endText}</span>
        <List>
          {years.map((year) => (
            <ListItem
              key={year}
              selectedColor={selectedColor}
              className={`${selectedEndYear === year && 'selected'}
              ${
                selectedStartYear !== 0 && selectedStartYear > year && 'disable'
              }`}
              onClick={() => {
                handleSelect(selectedStartYear, year)
                setSelectedEndYear(year)
              }}
            >
              {year}
            </ListItem>
          ))}
        </List>
      </ListContainer>
    )
  }

  const renderOptions = () => {
    return (
      <OptionsContainer className='yrp-options-container'>
        {renderStartYearPicker()}
        {renderEndYearPicker()}
      </OptionsContainer>
    )
  }

  const renderSelectedYears = () => {
    return (
      <PickerBox
        className='yrp-picker-box'
        onClick={() => setOptionsVisible(true)}
      >
        <PickerText className='yrp-picker-text'>
          <span>{selectedStartYear === 0 ? startText : selectedStartYear}</span>
          <Spacer className='yrp-spacer'>{spacer}</Spacer>
          <span>{selectedEndYear === 0 ? endText : selectedEndYear}</span>
        </PickerText>

        <Button className='yrp-arrow-button' type='button'>
          <ArrowDown />
        </Button>
      </PickerBox>
    )
  }

  return (
    <PickerContainer
      style={style}
      className={`yrp-container ${classNames} ${
        disable === true ? 'disable' : ''
      }`}
      ref={containerRef}
    >
      {renderSelectedYears()}
      {optionsVisible && renderOptions()}
    </PickerContainer>
  )
}

const PickerContainer = styled.div`
  border: 1px solid #eee;
  min-width: 200px;
  cursor: pointer;
  display: inline-block;
  position: relative;

  &.disable {
    pointer-events: none;
    color: #aaa;
    background: #eee;
    cursor: auto;
  }
`

const PickerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
`

const PickerText = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  color: #000;
`

const Spacer = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`

const Button = styled.button`
  border: none;
  background: none;
  margin-left: 10px;
`

const ArrowDown = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #eee;
  border-top: none;
  margin-left: -1px;
  overflow-y: auto;
  z-index: 10;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

const ListContainer = styled.div`
  text-align: center;
  flex-grow: 1;
`

const List = styled.ul`
  list-style: none;
  padding: 0 10px;
`

const ListItem = styled.li`
  padding: 5px;
  margin-bottom: 5px;
  background: #fff;

  &.selected {
    background: ${(prop: { selectedColor: string }) => prop.selectedColor};
    color: #fff;
  }

  &.disable {
    pointer-events: none;
    color: #aaa;
    background: #eee;
    cursor: auto;
  }
`
