import React, { useRef, useState } from 'react';

import { Image } from '@chakra-ui/image';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useTheme } from '@chakra-ui/system';
import { AnimatedCard } from 'components/primitives/AnimatedCard';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { Article as ArticleType } from 'types/article';

import { ArticleModal } from '../ArticleModal';
import { ArticleListGeneratedProps } from './ArticleList.props';
import { getStyles } from './ArticleList.style';
import './ArticleList.css';

const Article = ({ item, onItemClick }: any) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <AnimatedCard p={0} onClick={onItemClick}>
      <Stack {...styles.card}>
        <Box {...styles.articleImgContainer}>
          <Image {...styles.articleImg} src={item.imageUrl} />
        </Box>
        <Box {...styles.title}>
          <Text w="100%" color="#fff">
            {item.title}
          </Text>
        </Box>
      </Stack>
    </AnimatedCard>
  );
};

const View: React.FC<ArticleListGeneratedProps> = ({ data, isLoading }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const listRef = useRef<HTMLDivElement | null>(null);
  const offset = window.innerWidth * (80 / 100);
  const scrollWidth = useRef(offset);
  const [selectedArticle, setSelectedArticle] = useState<ArticleType | null>(
    null,
  );
  const modalRef = useRef<{
    onOpen: () => void;
    onClose: () => void;
  }>({ onClose: () => null, onOpen: () => null });

  return (
    <Flex {...styles.container}>
      <Text fontSize="40px" fontWeight="bold">
        Latest Stories
      </Text>
      <Stack {...styles.listContainer}>
        {isLoading ? (
          <Flex {...styles.loadingContainer}>
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Flex alignItems="center">
            <IoMdArrowDropleft
              size="80px"
              cursor="pointer"
              onClick={() => {
                listRef.current?.scroll({
                  left: -scrollWidth.current - offset,
                  behavior: 'smooth',
                });
              }}
            />
            <Flex ref={listRef} className="list-container">
              {data?.map((item, index) => (
                <Article
                  key={`${item.id}-${index}`}
                  item={item}
                  index={index}
                  onItemClick={() => {
                    setSelectedArticle(item);
                    modalRef.current.onOpen();
                  }}
                />
              ))}
            </Flex>
            <IoMdArrowDropright
              size="80px"
              cursor="pointer"
              onClick={() => {
                listRef.current?.scroll({
                  left: scrollWidth.current + offset,
                  behavior: 'smooth',
                });
              }}
            />
          </Flex>
        )}
      </Stack>
      <ArticleModal ref={modalRef} data={selectedArticle} />
    </Flex>
  );
};

export default View;
