import React, { useState } from 'react'

import { BasicStatistics } from './component/deals'
import { Destination } from './component/destination'
import "./index.css"
import { Modaldiv } from './component/modal'
import { Box, } from '@chakra-ui/react'
import { Tabses } from './component/tab'
export const Home = () => {

  return (
<Box marginTop='80px'>
    <Box  bg='#07162d' h='450px'display={'flex'}alignItems='center'justifyContent={'center'}>
 <Tabses/>
    </Box>
<BasicStatistics/>
<Destination/>
    </Box> )
}
