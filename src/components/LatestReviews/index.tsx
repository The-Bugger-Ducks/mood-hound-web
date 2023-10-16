import Table from "../Table";
import moment from "moment";
import queryCommentsProcessor from "../../utils/processors/queryComments.processor";
import CommentInterface from "../../utils/interfaces/comment.interface";
import SearchModal from "./SearchModal";
import commentSentimentHandler from "../../utils/handlers/commentSentiment.handler";

import { useEffect, useState } from "react";
import { BiSlider } from "react-icons/bi";
import { RowInterface } from "../Table/props";
import { CommentTopicEnum } from "../../utils/enums/commentTopic.enum";
import { lastReviewsTableHeader, limitReviewsTable } from "./constants";

import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export default function LatestReviews() {
  const toast = useToast();
  const searchModalController = useDisclosure();

  const [topic, setTopic] = useState<CommentTopicEnum | undefined>();
  const [dateStart, setDateStart] = useState<Date | undefined>();
  const [dateEnd, setDateEnd] = useState<Date | undefined>();
  const [valueToSearch, setValueToSearch] = useState<string | undefined>();

  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>();
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>();

  const [lastReviewsTableRows, setLastReviewsTableRows] = useState<
    RowInterface[]
  >([]);

  const responseQueryCommentsProcessor = queryCommentsProcessor(
    {
      limit: limitReviewsTable,
      page,
    },
    { comment: valueToSearch, dateDone: dateEnd, dateStart: dateStart, topic },
    { retry: false, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [valueToSearch, topic, dateStart, dateEnd, page]);

  const getComments = async () => {
    const response = await responseQueryCommentsProcessor.refetch();

    if (!response.data) {
      toast({
        title: "Houve um erro ao carregar avaliações.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    const comments = response.data;

    setHasNextPage(comments.meta.hasNextPage);
    setHasPreviousPage(comments.meta.hasPreviousPage);

    refreshTable(comments.data);
  };

  const refreshTable = (newComments: CommentInterface[]) => {
    const newLastReviewsTableRows: RowInterface[] = [];

    newComments.forEach((newComment) => {
      newLastReviewsTableRows.push({
        id: `header_${newComment.id}`,
        cells: [
          {
            id: `date_${newComment.id}`,
            align: "left",
            element: moment(newComment.createdAt).format("DD/MM/YYYY"),
          },
          {
            id: `theme_${newComment.id}`,
            align: "left",
            element: (
              <Badge
                colorScheme={commentSentimentHandler(newComment.sentiment)}
              >
                {newComment.topic}
              </Badge>
            ),
          },
          {
            id: `description_${newComment.id}`,
            align: "left",
            element: <Text title={newComment.text}>{newComment.text}</Text>,
          },
        ],
      });
    });

    setLastReviewsTableRows(newLastReviewsTableRows);
  };

  const applyFilters = (
    newTopic?: CommentTopicEnum,
    newDateStart?: Date,
    newDateEnd?: Date,
    newValueToSearch?: string
  ) => {
    setPage(1);
    setTopic(newTopic);
    setDateStart(newDateStart);
    setDateEnd(newDateEnd);
    setValueToSearch(newValueToSearch);
  };

  return (
    <Box m="2rem 0" p="0" bg="transparent">
      <Flex>
        <Text variant="title">Últimas avaliações</Text>

        <Spacer />

        <Button
          size="sm"
          variant="ghost"
          color="teal.500"
          leftIcon={<Icon as={BiSlider} />}
          onClick={searchModalController.onOpen}
        >
          Filtrar
        </Button>
      </Flex>

      <Table
        header={lastReviewsTableHeader}
        rows={lastReviewsTableRows}
        withEllipsisInRows
        withUppercaseInHeader
        paginationController={{
          onNextPage: () => {
            if (!hasNextPage) {
              toast({
                title: "Você já visualizou todas as páginas.",
                status: "warning",
                duration: 9000,
                isClosable: true,
              });

              return;
            }

            setPage(page + 1);
          },
          onPreviousPage: () => {
            if (!hasPreviousPage) {
              toast({
                title: "Você já está na primeira página.",
                status: "warning",
                duration: 9000,
                isClosable: true,
              });

              return;
            }

            setPage(page - 1);
          },
        }}
      />

      <SearchModal
        isOpen={searchModalController.isOpen}
        onClose={searchModalController.onClose}
        confirmButton={applyFilters}
      />
    </Box>
  );
}
