import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const RadioExample=()=> {
    const [value, setValue] =useState('1')
    return (
      <RadioGroup onChange={setValue} value={value}>
        <Stack  direction={{lg:'column',md:"row",sm:"row"}}>
          <Radio value='1'>Economy</Radio>
          <Radio value='2'>Premium Economy</Radio>
          <Radio value='3'>Business</Radio>
          <Radio value='3'>First Class</Radio>
        </Stack>
      </RadioGroup>
    )
  }