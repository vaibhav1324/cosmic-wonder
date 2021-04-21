import React, { forwardRef, useImperativeHandle } from 'react';
import { ArticleModalType } from './ArticleModal.props';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Image } from '@chakra-ui/image';
import { Link, Stack, Text } from '@chakra-ui/layout';
import { format } from 'date-fns';
import { useTheme } from '@chakra-ui/system';

const ArticleModal: ArticleModalType = forwardRef(function ArticleModal(
  { data },
  ref,
) {
  const theme = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useImperativeHandle(
    ref,
    () => ({
      onOpen,
      onClose,
    }),
    [onOpen, onClose],
  );

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="scale"
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader maxW="90%">{data?.title}</ModalHeader>
        <ModalCloseButton bg="#fff" />
        <ModalBody>
          <Image
            src={data?.imageUrl}
            borderRadius="5px"
            shadow="lg"
            objectFit="cover"
          />
          <Stack my={2} fontWeight="bold">
            <Text>
              News Site :{' '}
              <Link
                color={theme.colors.brand[500]}
                href={data?.url}
                target="_blank">
                {data?.newsSite}
              </Link>
            </Text>
            <Text>
              Published on :{' '}
              {format(
                new Date(data?.publishedAt || new Date()),
                'dd-MM-yyyy HH:mm',
              )}
            </Text>
            <Text>{data?.summary}</Text>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default ArticleModal;
