import React from 'react'
import "./index.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Gallery = () => {

    // const basementArray = ["/images/homes/luxhome6.jpg"];
    // console.log(basementArray)

    return (
        <div className="gallery-container">
            <div className="gallery-row">
                <div className="gallery-header_container">
                    <h4>Gallery</h4>
                    <h1>We hold ourselves to a very high standard that we pass along to our clients by offering upgraded options as standard items.  Additionally at standard pricing, we only build energy-efficient homes certified by Energy Star Homes</h1>
                </div>
            </div>
            <div className="gallery-tab_container">
                <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList>
                        <Tab><h4>Master Bedrooms</h4></Tab>
                        <Tab><h4>Master Bathrooms</h4></Tab>
                        <Tab><h4>House Plans</h4></Tab>
                        <Tab><h4>Bedrooms</h4></Tab>
                        <Tab><h4>Bathrooms</h4></Tab>
                        <Tab><h4>Kitchens</h4></Tab>
                        <Tab><h4>Backyards</h4></Tab>
                        <Tab><h4>Fire Places</h4></Tab>
                        <Tab><h4>Lighting</h4></Tab>
                        <Tab><h4>Flooring</h4></Tab>
                    </TabList>
                    {/* BASEMENT */}
                    <TabPanels>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Living Room</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container9">
                                        <div className="bottom-banner">
                                            <div className="bottom-banner_info">
                                                <div className="gallery-header">
                                                    <h1>Basement</h1>
                                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-row_2">
                                <div className="row2_container">
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome6.jpg" alt="home" />
                                    </div>
                                    <div className="home_container4">
                                        <img src="/images/homes/luxhome7.jpg" alt="home" />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Gallery;

<div className="bottom-banner_info">
    <div className="gallery-header">
        <h1>Basement</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus mauris, mollis id metus at, posuere rutrum enim. Nunc et aliquam massa. Duis gravida vestibulum nunc, non mollis dui gravida sit amet. Nunc aliquam tincidunt ultrices. Ut sit amet urna ac nulla luctus elementum id eu ante. Quisque consectetur orci quis justo cursus molestie vitae quis ex. Sed ac porta nunc.</h3>
    </div>
</div>
