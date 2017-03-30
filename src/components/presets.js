import React from 'react'

const onlyUnique = (value, index, self) => self.indexOf(value) === index

export default function Login (props) {
  const {
    presets,
    preSelect
  } = props

  let list
  if (presets) {
    const categories = Object.keys(presets).map((key) => presets[key].category).filter(onlyUnique)
    list = categories.map((category) => {
      const available = Object.keys(presets).filter((key) => presets[key].category === category)
      return (
        <optgroup key={category} label={category}>
          {available.map(
            (key) => <option key={key} value={key}>{presets[key].event}</option>
          )}
        </optgroup>
      )
    })
  }


  return (
    <select onChange={(e) => preSelect(e.target.value)}>
      { list }
    </select>
  )
}
