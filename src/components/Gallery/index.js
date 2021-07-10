import React from 'react'
import "./index.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Gallery = () => {

    const enlargeImage = (image) => {
        // console.log(image)
    }

    const plansArray1 = ["/images/plans/plan(1).jpg", "/images/plans/plan(2).jpg", "/images/plans/plan(3).jpg", "/images/plans/plan(4).jpg"]
    const plansArray2 = ["/images/plans/plan(5).jpg", "/images/plans/plan(6).jpg", "/images/plans/plan(7).jpg", "/images/plans/plan(8).jpg"]
    const plansArray3 = ["/images/plans/plan(9).jpg", "/images/plans/plan(10).jpg", "/images/plans/plan(11).jpg", "/images/plans/plan(12).jpg"]
    const plansArray4 = ["/images/plans/plan(13).jpg", "/images/plans/plan(14).jpg", "/images/plans/plan(15).jpg", "/images/plans/plan(16).jpg"]
    const plansArray5 = ["/images/plans/plan(17).jpg", "/images/plans/plan(18).jpg", "/images/plans/plan(19).jpg", "/images/plans/plan(20).jpg"]
    const plansArray6 = ["/images/plans/plan(21).jpg", "/images/plans/plan(22).jpg", "/images/plans/plan(23).jpg", "/images/plans/plan(24).jpg",]
    const plansArray7 = ["/images/plans/plan(25).jpg", "/images/plans/plan(26).jpg", "/images/plans/plan(27).jpg", "/images/plans/plan(28).jpg"]
    const plansArray8 = ["/images/plans/plan(29).jpg", "/images/plans/plan(30).jpg",];

    const backyardArray1 = ["/images/backyard/backyard(1).jpg", "/images/backyard/backyard(2).jpg", "/images/backyard/backyard(3).jpg", "/images/backyard/backyard(4).jpg"];
    const backyardArray2 = ["/images/backyard/backyard(5).jpg", "/images/backyard/backyard(6).jpg", "/images/backyard/backyard(7).jpg"];

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
