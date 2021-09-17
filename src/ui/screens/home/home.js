import React from 'react'
import HomeBanner from './components/banner/HomeBanner'
import HomeAbout from './components/about/HomeAbout'
import HomeCardList from './components/cardList/HomeCardList'
import HomeDetails from './components/details/HomeDetails'
import Donation from './components/donation/Donation'
import TopDonor from './components/topDonor/TopDonor'
import Report from './components/report/Report'
import Volunteer from './components/volunteer/Volunteer'
import Feedback from './components/feedback/Feedback'

export default function Home() {
    return (
        <>
            <HomeBanner/>
            <HomeAbout/>
            <HomeCardList/>
            <HomeDetails/>
            <Donation/>
            <TopDonor/>
            <Report/>
            <Volunteer/>
            <Feedback/>
        </>
    )
}
