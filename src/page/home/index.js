import React, {useEffect} from "react";
import TopSection from "./elements/TopSection";
import Products from "./elements/products";
import Footer from "../../Components/global/footer";
import {Container} from "reactstrap";
import Discount from "../../Components/elements/discount/Discount";
import CategorieSection from "./elements/categorieSection";
import { useMediaQuery } from 'react-responsive'
const Home=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

    return(
        <div >
            {isDesktopOrLaptop && <CategorieSection/>}
            <Container>
                <TopSection/>
            </Container>
            <Discount/>
                <Container>
                <Products/>
            </Container>
            <Footer/>
        </div>
    )
}
export default Home;