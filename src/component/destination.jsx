
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const Destination = () => {
  return (
    <Box position={"static"} w='80%' margin={'auto'} marginTop='30px'>
        <Box>
            <Flex gap={{lg:"30px",md:"20px",sm:"1px"}} alignItems={'center'}>
        <Heading size={{lg:"lg",md:"md",sm:"md"}}>Popular Destinations</Heading>
        <Heading  size={{lg:"md",md:"md",sm:"sl"}} >All Destinations</Heading>
        <Heading  display={{lg:"block",md:"block",sm:"none"}} size={{lg:"md",md:"sl",sm:"sl"}} >INTERNATIONAL</Heading>
        <Heading display={{lg:"block",md:"block",sm:"none",}} size={{lg:"md",md:"sl",sm:"sl"}} >DOMESTIC</Heading>
        </Flex>
        </Box>
        <Box position={"static"}>
            <SimpleGrid gap='20px' columns={{lg:3,md:2,sm:1}}>
  <Propimage heading='Dubai' src='https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/admin/thumbnail16661767573751cb13b5454585842e09ae1803494eb691.jpg'/>
  <Propimage heading='turkey' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/turkey-18102021.webp'/>
  <Propimage heading='Mauritius' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/mauritious-31.webp'/>
  <Propimage heading='Himachal' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Himachal.webp'/>
  <Propimage heading='Ladakh' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp'/>
  <Propimage heading='Swizerland' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/switz1222.webp'/>
  <Propimage heading='Corderia Cruises' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Andaman.webp'/>
  <Propimage heading='Andaman' src='https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/admin/thumbnail16448378203350ANDAMAN(2).jpg'/>
  <Propimage heading='Dubai' src='https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Dubai.webp'/>
  </SimpleGrid>   </Box>
    </Box>
  )
}


const Propimage=(prop)=>{
    return(
        // <Box >
            <Box  position="relative">
            <img position='static' style={{width:"100%",height:"100%",}} src={prop.src} alt="turky"  />
           <Heading size={'md'} top='2px' left='20px' position='absolute' zIndex='' color='white'>{prop.heading}</Heading>
        
           </Box>
        //    </Box>
    )
}