import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/react"
import NavbarComponent from './NavbarComponent'

const MobileNavComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton className="drawer-close-btn" />
                    <DrawerHeader className="drawer-hd">Denice Julius Minja</DrawerHeader>

                    <DrawerBody style={{padding: '0'}}>
                        
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavComponent
