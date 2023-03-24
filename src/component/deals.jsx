import { Box, Button, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

  export const BasicStatistics=()=> {
    return (<Box  marginTop={'30px'} >
      <Box w='80%' margin={'auto'}>
      <Box >
  <Flex  gap={{lg:"30px",md:"20px",sm:"2px"}} textAlign={'center'}alignItems='center'>
     <Heading size={{lg:"lg",md:"md",sm:"md"}}>Exclusive Deals</Heading>
     <Heading size={{lg:"md",md:"md",sm:"sl"}} >HOT DEAL</Heading>
     <Heading size={{lg:"md",md:"md",sm:"sl"}} >FLIGHT</Heading>
     <Heading size={{lg:"md",md:"md",sm:"sl"}} >HOTEL</Heading>
     <Heading size={{lg:"md",md:"md",sm:"sl"}} >HOLIDAYS</Heading>
     <Heading size={{lg:"md",md:"md",sm:"sl"}} >CRUISE</Heading>
     </Flex> </Box>
     {/* <Box > */}
        <SimpleGrid columns={{lg:3,md:2,sm:2}} gap='20px'>
        <Propdata text='Fly direct to Abu Dhabi'  heading='AirArabia direct flights'  srcs='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/abudhabi-1302.webp'/>
        <Propdata text='Enjoy up to Rs. 5000* off on International Flights'  heading='Say YES to International Travel'  srcs='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/say-yes.webp'/>
        <Propdata text='Book Flight + Visa with instant savings'  heading='Fly to Dubai with Any Visa Category'  srcs='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/slide_43.webp'/>
        <Propdata text='Every Wednesdays on Flight bookings'  heading="ZERO Convenience Fee"  srcs='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/slide_10.webp'/>
        <Propdata text='Fly direct to Abu Dhabi'  heading='AirArabia direct flights'  srcs='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/abudhabi-1302.webp'/>
        </SimpleGrid> </Box>
     {/* </Box> */}
     </Box>);
  }

  const Propdata=(prop)=>{
return(
    <Box boxShadow='base' p='6' rounded='md' bg='white' >
    <Flex>
    <img  src={prop.srcs} alt="flight"  />
   <Box display={'flex'} flexDirection='column'>
    <Heading size={'md'}>{prop.heading}</Heading>
    <Text >{prop.text}</Text>
    <Button position={"static"} variant='link' color='red' marginTop={'auto'}>Book New</Button>
   </Box>
    </Flex>
    </Box>)
  }

