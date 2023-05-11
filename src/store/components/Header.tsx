import * as React from 'react';

import {Card, Drawer, CardBody, CardFooter, Heading, Modal, ModalOverlay, IconButton, Text, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useDisclosure, Textarea, Container, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider} from '@chakra-ui/react'
import {EditIcon, ArrowLeftIcon, ArrowRightIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import KeyInput from './KeyInput';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'10px'}>
      <Text fontSize={20}>🤔</Text>
      <Text fontSize={20}>Фелосафы</Text>
      <IconButton
        aria-label='navigation'
        icon={<HamburgerIcon/>}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent paddingBottom={'10px'}>
          <DrawerCloseButton />
          <DrawerHeader paddingBottom={'10px'}>Навигация</DrawerHeader>

          <DrawerBody display={'flex'} flexDir={'column'} gap={'10px'}>
            <Link
              to={'/test'}
            >
              Тест
            </Link>

            <Link
              to={'/'}
            >Все вопросы</Link>
            <KeyInput/>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Header;
