import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { useDisclosure } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import { Link, Stack, Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/modal';
import { useTheme } from '@chakra-ui/system';
import { format } from 'date-fns';

import { Article } from 'types/article';
import { ArticleModalProps, ArticleModalRef } from './ArticleModal.props';

const ArticleModal = forwardRef<ArticleModalRef, ArticleModalProps>(
  (_, ref) => {
    const theme = useTheme();
    const { isOpen, onClose, onOpen } = useDisclosure();

    const [data, setData] = useState<Article | null>(null);

    useImperativeHandle(
      ref,
      () => ({
        onOpen: (_article) => {
          setData(_article);

          onOpen();
        },
        onClose,
      }),
      [],
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
  },
);

export default ArticleModal;
