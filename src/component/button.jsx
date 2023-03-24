import { Text ,Button, Flex} from '@chakra-ui/react'
import React, { useState } from 'react'

export const Buttones = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <Flex  gap='10px' justifyContent={'space-between'}>
           <Text >{count}</Text>
           <Button disabled={count==1} onClick={()=>setCount(count-1)}>-</Button>
           <Button onClick={()=>setCount(count+1)}>+</Button>
           </Flex> 
            </div>
  )
}
