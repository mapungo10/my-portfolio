import React, {useState} from 'react'
import PageHeaderComponent from '../globals/PageHeaderComponent'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import WacamedHP from '../../assets/media/images/portfolios/wacamedHP.PNG'
import WacamedAD from '../../assets/media/images/portfolios/wacamedAD.PNG'
import WacamedRG from '../../assets/media/images/portfolios/wacamedRG.PNG'
import WacamedCZ from '../../assets/media/images/portfolios/wacamedCZ.PNG'
import WacamedAS from '../../assets/media/images/portfolios/wacamedAS.PNG'
import WacamedCD from '../../assets/media/images/portfolios/wacamedCD.PNG'

const PortfolioComponent = () => {
    const [wacamedPortfolio] = useState([
        {
            image: WacamedHP,
            desc: 'wacamed college website homepage'
        },
        {
            image: WacamedCZ,
            desc: 'wacamed college website courses section'
        },
        {
            image: WacamedCD,
            desc: 'wacamed college website course details page'
        },
        {
            image: WacamedRG,
            desc: 'wacamed college website registration page'
        },
        {
            image: WacamedAS,
            desc: 'wacamed college website admin dashboard'
        },
        {
            image: WacamedAD,
            desc: 'wacamed college website student application system dashboard'
        },
    ])
    return (
        <>
            {/* ============= pageheader =============== */}
                <PageHeaderComponent title="My Portfolios" subTitle="Samples of my works" />

            {/* ============== content ================= */}
                <div className="page-content-con">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <Carousel className=" mt-3">
                                    {
                                        wacamedPortfolio.map((portfolio, index) => (
                                            <div key={index}>
                                                <img src={portfolio.image} alt="img"/>
                                                <p className="m-0 p-0">{portfolio.desc}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default PortfolioComponent

