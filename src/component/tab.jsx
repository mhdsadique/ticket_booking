import  { useState } from 'react'
import {Box,Button,Flex,Input,Select,Text} from "@chakra-ui/react"
import {Heading,SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Buttones } from './button'
import { RadioExample } from './radio'
import { Selectes } from './select'
export const Tabses = () => {
    
    const [from,setFrom]=useState("")
    const [from2,setFromtoo]=useState("")
    const [to,setTo]=useState("")
    const [to2,setTooo]=useState("")
  return (
    <Tabs w='80%' margin={'auto'} bg='white'h='90%' >
    <TabList>
      <Tab>One Way</Tab>
      <Tab>Rount Trip</Tab>
      <Tab>Multi City</Tab>
    </TabList>
  
    <TabPanels >
      <TabPanel marginTop={{lg:"30px",md:"0px",sm:"0px"}}>
        <Box>
          <SimpleGrid columns={{lg:6,md:2,sm:2}}>
          <Box>
            {/* <Modaldiv/> */}
  <Heading size={'sm'}>FROM</Heading>
            <Select onChange={(e)=>setFrom(e.target.value)} value={from} placeholder='Select option'>
    <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading>{from}</Heading>
          </Box>
          <Box>
          <Heading size={'sm'}>TO</Heading>
            <Select  onChange={(e)=>setTo(e.target.value)} value={to} placeholder='Select option'>
            <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading>{to}</Heading>
          </Box>
          <Box>
              <Text>Depart</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date"
  /></Box>
  <Box>
              <Text>Return</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date" disabled='true'
  /></Box>
  <Box display='block'>
   <Heading size={'sm'}>Traveller</Heading>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Adults</Text>

    <Buttones />

    </Flex>
   </Box>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Children</Text>
    <Buttones />
    </Flex>
   </Box>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Infants</Text>
    <Buttones />
    </Flex>
   </Box>
    <RadioExample/>
    </Box>
    
    <Button margin={'40px'} position={"static"}  color={'white'} w='150px'h='65px'bg='red' fontSize={'xl'}>Search Flights</Button>
    </SimpleGrid> 
     </Box>
      </TabPanel>
      <TabPanel marginTop={{lg:"30px",md:"0px",sm:"0px"}}>
      <Box>
          <SimpleGrid columns={{lg:6,md:2,sm:2}}>
          <Box>
  <Heading size={'sm'}>FROM</Heading>
            <Select onChange={(e)=>setFrom(e.target.value)} value={from} placeholder='Select option'>
    <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading>{from}</Heading>
          </Box>
          <Box>
          <Heading size={'sm'}>TO</Heading>
            <Select  onChange={(e)=>setTo(e.target.value)} value={to} placeholder='Select option'>
            <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading>{to}</Heading>
          </Box>
          <Box>
              <Text>Depart</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date"
  /></Box>
  <Box>
              <Text>Return</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date"
  /></Box>
  <Box display='block'>
   <Heading size={'sm'}>Traveller</Heading>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Adults</Text>

    <Buttones />

    </Flex>
   </Box>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Children</Text>
    <Buttones />
    </Flex>
   </Box>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Infants</Text>
    <Buttones />
    </Flex>
   </Box>
    <RadioExample/>
    </Box>
    <Button margin={'40px'} position={"static"}  color={'white'} w='150px'h='65px'bg='red' fontSize={'xl'}>Search Flights</Button>
    </SimpleGrid>   
     </Box>
     {/* <Selectes/> */}
      </TabPanel>
      <TabPanel marginTop={{lg:"30px",md:"0px",sm:"0px"}}>
      <Box>
          <SimpleGrid columns={{lg:6,md:2,sm:2}}>
          <Box>
            {/* <Modaldiv/> */}
  <Heading size={'sm'}>FROM</Heading>
            <Select onChange={(e)=>setFrom(e.target.value)} value={from} placeholder='Select option'>
    <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading size='md'>{from}</Heading>
          </Box>
          <Box>
          <Heading size={'sm'}>TO</Heading>
            <Select  onChange={(e)=>setTo(e.target.value)} value={to} placeholder='Select option'>
            <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading size='md'>{to}</Heading>
          </Box>
          <Box>
              <Text>Depart</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date"
  /></Box>
  <Box>
              <Text>Return</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date" 
  /></Box>
  <Box display='block'>
   <Heading size={'sm'}>Traveller</Heading>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Adults</Text>

    <Buttones />

    </Flex>
   </Box>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Children</Text>
    <Buttones />
    </Flex>
   </Box>
   <Box>
    <Flex justifyContent={'space-between'}>
    <Text>Infants</Text>
    <Buttones />
    </Flex>
   </Box>
    <RadioExample/>
    </Box>
    <Button margin={'40px'} position={"static"}  color={'white'} w='150px'h='65px'bg='red' fontSize={'xl'}>Search Flights</Button>

    </SimpleGrid> 
     </Box>



     {/* <Box>
          <SimpleGrid columns={{lg:6,md:2,sm:2}}>
          <Box>
       
  <Heading size={'sm'}>FROM</Heading>
            <Select onChange={(e)=>setFromtoo(e.target.value)} value={from} placeholder='Select option'>
    <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading size={'md'}>{from2}</Heading>
          </Box>
          <Box>
          <Heading size={'sm'}>TO</Heading>
            <Select  onChange={(e)=>setTooo(e.target.value)} value={to} placeholder='Select option'>
            <option value='Kozhikode'>Kozhikode</option>
    <option value='Kochi'>Kochi</option>
    <option value='Kannur'>Kannur</option>
    <option value='Thiruvananthapuram'>Thiruvananthapuram</option>
    <option value='Dubai'>Dubai</option>
    <option value='Sharjah'>Sharjah</option>
    <option value='Abudhabi'>Abudhabi</option>
  </Select>
              <Heading size='md'>{to2}</Heading>
          </Box>
          <Box>
              <Text>Depart</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date"
  /></Box>
  <Box>
              <Text>Return</Text>
          <Input position={"static"}
   placeholder="Select Date and Time"
   size="md"
   type="date" 
  /></Box>
    </SimpleGrid> 
  
     </Box> */}
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
