import React from 'react'
import "./index.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import SoloImage from './SoloImage'

const Gallery = () => {

    const plansArray0 = ["/images/plans/plan(1).jpg", "/images/plans/plan(2).jpg", "/images/plans/plan(3).jpg", "/images/plans/plan(4).jpg", "/images/plans/plan(5).jpg", "/images/plans/plan(6).jpg", "/images/plans/plan(7).jpg", "/images/plans/plan(8).jpg", "/images/plans/plan(9).jpg", "/images/plans/plan(10).jpg", "/images/plans/plan(11).jpg", "/images/plans/plan(12).jpg", "/images/plans/plan(13).jpg", "/images/plans/plan(14).jpg", "/images/plans/plan(15).jpg", "/images/plans/plan(16).jpg", "/images/plans/plan(17).jpg", "/images/plans/plan(18).jpg", "/images/plans/plan(19).jpg", "/images/plans/plan(20).jpg", "/images/plans/plan(21).jpg", "/images/plans/plan(22).jpg", "/images/plans/plan(23).jpg", "/images/plans/plan(24).jpg", "/images/plans/plan(25).jpg", "/images/plans/plan(26).jpg", "/images/plans/plan(27).jpg", "/images/plans/plan(28).jpg", "/images/plans/plan(29).jpg", "/images/plans/plan(30).jpg"]
    const backyardArray = ["/images/backyard/backyard(1).jpg", "/images/backyard/backyard(2).jpg", "/images/backyard/backyard(3).jpg", "/images/backyard/backyard(4).jpg", "/images/backyard/backyard(5).jpg", "/images/backyard/backyard(6).jpg", "/images/backyard/backyard(7).jpg"];
    const lightingArray = ["/images/lights/lights(1).jpg", "/images/lights/lights(2).jpg", "/images/lights/lights(3).jpg", "/images/lights/lights(4).jpg", "/images/lights/lights(5).jpg", "/images/lights/lights(6).jpg", "/images/lights/lights(7).jpg", "/images/lights/lights(8).jpg", "/images/lights/lights(9).jpg", "/images/lights/lights(10).jpg", "/images/lights/lights(11).jpg", "/images/lights/lights(12).jpg", "/images/lights/lights(13).jpg", "/images/lights/lights(14).jpg", "/images/lights/lights(15).jpg", "/images/lights/lights(16).jpg", "/images/lights/lights(17).jpg", "/images/lights/lights(18).jpg", "/images/lights/lights(19).jpg", "/images/lights/lights(20).jpg", "/images/lights/lights(21).jpg", "/images/lights/lights(22).jpg", "/images/lights/lights(23).jpg", "/images/lights/lights(24).jpg", "/images/lights/lights(25).jpg", "/images/lights/lights(26).jpg", "/images/lights/lights(27).jpg", "/images/lights/lights(28).jpg", "/images/lighting/bathrooms (1).jpg", "/images/lighting/bathrooms (2).jpg", "/images/lighting/bathrooms (3).jpg", "/images/lighting/bathrroms (4).jpg", "/images/lighting/bathrooms (5).jpg", "/images/lighting/bathrooms (6).jpg", "/images/lighting/bathrooms (7).jpg", "/images/lighting/bathrooms (8).jpg", "/images/lighting/bathrooms (9).jpg", "/images/lighting/bathrooms (10).jpg", "/images/lighting/bathrooms (11).jpg", "/images/lighting/bathrooms (12).jpg", "/images/lighting/bathrooms (13).jpg", "/images/lighting/bathrooms (14).jpg", "/images/lighting/bathrooms (15).jpg", "/images/lighting/bathrooms (16).jpg", "/images/lighting/bathrooms (17).jpg", "/images/lighting/bathrooms (18).jpg", "/images/lighting/bathrooms (19).jpg", "/images/lighting/bathrooms (20).jpg", "/images/lighting/bathrooms (21).jpg", "/images/lighting/bathrooms (22).jpg", "/images/lighting/bathrooms (23).jpg", "/images/lighting/bathrooms (24).jpg", "/images/lighting/bathrooms (25).jpg", "/images/lighting/bathrooms (26).jpg", "/images/lighting/bathrooms (27).jpg", "/images/lighting/bathrooms (28).jpg", "/images/lighting/bathrooms (29).jpg", "/images/lighting/bathrooms (30).jpg"];
    const kitchenArray = ["/images/kitchen/kitchen(1).jpg", "/images/kitchen/kitchen(2).jpg", "/images/kitchen/kitchen(3).jpg", "/images/kitchen/kitchen(4).jpg", "/images/kitchen/kitchen(5).jpg", "/images/kitchen/kitchen(6).jpg", "/images/kitchen/kitchen(7).jpg", "/images/kitchen/kitchen(8).jpg", "/images/kitchen/kitchen(9).jpg", "/images/kitchen/kitchen(10).jpg", "/images/kitchen/kitchen(11).jpg", "/images/kitchen/kitchen(12).jpg", "/images/kitchen/kitchen(13).jpg", "/images/kitchen/kitchen(14).jpg", "/images/kitchen/kitchen(15).jpg", "/images/kitchen/kitchen(16).jpg", "/images/kitchen/kitchen(17).jpg", "/images/kitchen/kitchen(18).jpg", "/images/kitchen/kitchen(19).jpg", "/images/kitchen/kitchen(20).jpg", "/images/kitchen/kitchen(21).jpg", "/images/kitchen/kitchen(22).jpg", "/images/kitchen/kitchen(23).jpg", "/images/kitchen/kitchen(24).jpg", "/images/kitchen/kitchen(25).jpg", "/images/kitchen/kitchen(26).jpg", "/images/kitchen/kitchen(27).jpg", "/images/kitchen/kitchen(28).jpg", "/images/kitchen/kitchen(29).jpg"]
    const fireplaceArray = ["/images/fireplace/fireplace(1).jpg", "/images/fireplace/fireplace(2).jpg", "/images/fireplace/fireplace(3).jpg", "/images/fireplace/fireplace(4).jpg", "/images/fireplace/fireplace(5).jpg", "/images/fireplace/fireplace(6).jpg", "/images/fireplace/fireplace(7).jpg", "/images/fireplace/fireplace(8).jpg", "/images/fireplace/fireplace(9).jpg", "/images/fireplace/fireplace(10).jpg", "/images/fireplace/fireplace(11).jpg", "/images/fireplace/fireplace(12).jpg", "/images/fireplace/fireplace(13).jpg", "/images/fireplace/fireplace(14).jpg", "/images/fireplace/fireplace(15).jpg", "/images/fireplace/fireplace(16).jpg", "/images/fireplace/fireplace(17).jpg", "/images/fireplace/fireplace(18).jpg"];
    const lightArray = ["/images/lighting/lighting(1).jpg", "/images/lighting/lighting(2).jpg", "/images/lighting/lighting(3).jpg", "/images/lighting/lighting(4).jpg", "/images/lighting/lighting(5).jpg", "/images/lighting/lighting(6).jpg", "/images/lighting/lighting(7).jpg", "/images/lighting/lighting(8).jpg", "/images/lighting/lighting(9).jpg", "/images/lighting/lighting(10).jpg", "/images/lighting/lighting(11).jpg", "/images/lighting/lighting(12).jpg", "/images/lighting/lighting(13).jpg", "/images/lighting/lighting(14).jpg", "/images/lighting/lighting(15).jpg", "/images/lighting/lighting(16).jpg", "/images/lighting/lighting(17).jpg", "/images/lighting/lighting(18).jpg", "/images/lighting/lighting(19).jpg", "/images/lighting/lighting(20).jpg", "/images/lighting/lighting(21).jpg", "/images/lighting/lighting(22).jpg", "/images/lighting/lighting(23).jpg", "/images/lighting/lighting(24).jpg", "/images/lighting/lighting(25).jpg", "/images/lighting/lighting(26).jpg", "/images/lighting/lighting(27).jpg", "/images/lighting/lighting(28).jpg", "/images/lighting/lighting(29).jpg", "/images/lighting/lighting(30).jpg", "/images/lighting/lighting(31).jpg", "/images/lighting/lighting(32).jpg", "/images/lighting/lighting(33).jpg", "/images/lighting/lighting(34).jpg", "/images/lighting/lighting(35).jpg", "/images/lighting/lighting(36).jpg", "/images/lighting/lighting(37).jpg", "/images/lighting/lighting(38).jpg", "/images/lighting/lighting(39).jpg", "/images/lighting/lighting(40).jpg", "/images/lighting/lighting(41).jpg", "/images/lighting/lighting(42).jpg", "/images/lighting/lighting(43).jpg", "/images/lighting/lighting(44).jpg", "/images/lighting/lighting(45).jpg", "/images/lighting/lighting(46).jpg"]


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
                    {/* Master Bedroom */}
                    <TabPanels>
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Master Bedrooms</h1>
                                    </div>
                                </div>
                                {plansArray0.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* MASTER BATHROOM */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Master Bathrooms</h1>
                                    </div>
                                </div>
                                {plansArray0.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* HOUSE PLANS */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>House Plans</h1>
                                    </div>
                                </div>
                                {plansArray0.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* Bedrooms */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Bedrooms</h1>
                                    </div>
                                </div>
                                {plansArray0.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* Bathrooms */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Bathrooms</h1>
                                    </div>
                                </div>
                                {lightingArray.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* Kitechens */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Kitchens</h1>
                                    </div>
                                </div>
                                {kitchenArray.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* BACKYARD */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Backyards</h1>
                                    </div>
                                </div>
                                {backyardArray.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* Fireplaces */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Fire Places</h1>
                                    </div>
                                </div>
                                {fireplaceArray.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* Lighting */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Lighting</h1>
                                    </div>
                                </div>
                                {lightArray.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                        {/* Flooring */}
                        <TabPanel>
                            <div className="grid-container">
                                <div className="gallery-tab_header">
                                    <div className="inner-tab_header">
                                        <h1>Flooring</h1>
                                    </div>
                                </div>
                                {lightArray.map((plan) => {
                                    return (
                                        <SoloImage key={plan} plan={plan} />
                                    )
                                })}
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Gallery;
