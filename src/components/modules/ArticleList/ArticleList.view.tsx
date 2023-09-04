import React, { FC, useMemo, useRef, useState } from 'react';

import { IconButton, Image, SimpleGrid } from '@chakra-ui/react';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useTheme } from '@chakra-ui/system';
import { AnimatedCard } from 'components/primitives/AnimatedCard';

import { ArticleModal, ArticleModalRef } from '../ArticleModal';
import { ArticleListGeneratedProps } from './ArticleList.props';
import { getStyles } from './ArticleList.style';
import { Article } from 'types/article';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const ArticleItem: FC<{
  item: Article;
  index: number;
  onItemClick: () => void;
}> = ({ item, index, onItemClick }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <AnimatedCard
      p={0}
      borderRadius="10px"
      onClick={onItemClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.3 * index,
      }}>
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

const View: React.FC<ArticleListGeneratedProps> = ({
  data = [],
  isLoading,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const modalRef = useRef<ArticleModalRef>(null);

  const [index, setIndex] = useState(0);

  const slicedItems = useMemo(() => data.slice(index, index + 3), [
    index,
    data.length,
  ]);

  const isMoreItemsAvailable = useMemo(
    () => data.slice(index + 3, index + 6).length > 0,
    [index, data.length],
  );

  return (
    <Flex {...styles.container}>
      <Text fontSize="40px" fontWeight="bold" color="#fff">
        Latest Stories
      </Text>
      <Stack {...styles.listContainer}>
        {isLoading ? (
          <Flex {...styles.loadingContainer}>
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Flex align="center" gridGap="20px">
            {index === 0 ? (
              <Flex w="80px" />
            ) : (
              <IconButton
                h="80px"
                w="80px"
                variant="ghost"
                aria-label="left-icon"
                color={theme.colors.brand[500]}
                icon={
                  <IoMdArrowDropleft
                    type="button"
                    size="80px"
                    cursor="pointer"
                  />
                }
                onClick={() => {
                  if (index === 0) {
                    return;
                  }

                  setIndex((prevIndex) => prevIndex - 3);
                }}
              />
            )}
            <SimpleGrid columns={[1, 2, 3]} spacing="20px">
              {slicedItems.map((item, index) => (
                <ArticleItem
                  key={`${item.id}-${index}`}
                  item={item}
                  index={index}
                  onItemClick={() => {
                    modalRef.current?.onOpen(item);
                  }}
                />
              ))}
            </SimpleGrid>
            {isMoreItemsAvailable ? (
              <IconButton
                h="80px"
                w="80px"
                color={theme.colors.brand[500]}
                variant="ghost"
                aria-label="right-icon"
                icon={
                  <IoMdArrowDropright
                    type="button"
                    size="80px"
                    cursor="pointer"
                  />
                }
                onClick={() => {
                  setIndex((prevIndex) => prevIndex + 3);
                }}
              />
            ) : (
              <Flex w="80px" />
            )}
          </Flex>
        )}
      </Stack>

      <ArticleModal ref={modalRef} />
    </Flex>
  );
};

export default View;
