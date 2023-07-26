import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Text } from '@chakra-ui/react'

const TableComponents = ({ titleOne, titleTwo, img, txt1,txt2, img2 }) => { 

return <>
<Tabs isLazy>
  <TabList>
    <Tab>{titleOne}</Tab>
    <Tab>{titleTwo}</Tab>
  </TabList>
  <TabPanels>
    {/* initially mounted */}
    <TabPanel>
    <Image
        boxSize='50%'
        fit='cover'
        src={img} 
      />

    <Text fontSize="lg" textAlign="justify">
        {txt1} </Text>
    </TabPanel>
    {/* initially not mounted */}
    <TabPanel>
    <Image
        boxSize='100%'
        fit='cover'
        src={img2} 
      />

    <Text fontSize="lg" textAlign="justify">
        {txt1} </Text>
    </TabPanel>
  </TabPanels>
</Tabs></>


}
export default TableComponents;