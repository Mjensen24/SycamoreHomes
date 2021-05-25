import React from 'react'
import "./index.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-row">
                <div className="gallery-header_container">
                    <h4>Gallery</h4>
                    <h1>We provide weekly updates and photos for all our homes during the construction process. A representative will be available 7 days a week to answer any questions or concerns that you may have.</h1>
                </div>
            </div>
            <div className="gallery-tab_container">
                <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList>
                        <Tab>Basement</Tab>
                        <Tab>Living Room</Tab>
                        <Tab>Master Bedroom</Tab>
                        <Tab>Master Bathroom</Tab>
                        <Tab>Patio</Tab>
                        <Tab>Kitchen</Tab>
                        <Tab>Master Bathroom</Tab>
                        <Tab>Patio</Tab>
                        <Tab>Kitchen</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>test</p>
                        </TabPanel>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>test</p>
                        </TabPanel>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>test</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Gallery;
