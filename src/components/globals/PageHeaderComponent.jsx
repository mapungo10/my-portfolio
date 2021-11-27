import React from 'react';
import { BsList } from "react-icons/bs";
import Logo from '../../assets/media/images/m10.png';
import NavbarComponent from './NavbarComponent';
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react"

const PageHeaderComponent = (props) => {
    // =============== states =====================
    const { isOpen, onOpen, onClose } = useDisclosure();

    // =============== return =======================
    return (
        <>
            {/* =========== mobile nav ============== */}
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton className="drawer-close-btn" />
                    <DrawerHeader className="drawer-hd">Denice Minja</DrawerHeader>
                    <DrawerBody style={{padding: '0', backgroundColor: '#000'}}>
                        <NavbarComponent />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            {/* ============== page header =============== */}
            <div className="col-sm-12 page-header-con">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <h1>
                    {props.title}
                </h1>
                <h5 style={{}}>{props.subTitle}</h5>
                <BsList className="d-lg-none d-md-none toggleIcon"  onClick={onOpen}/>
            </div>
        </>
    )
}

export default PageHeaderComponent
