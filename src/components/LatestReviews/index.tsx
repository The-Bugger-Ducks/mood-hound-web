import Table from "../Table";
import moment from "moment";
import queryCommentsProcessor from "../../utils/processors/queryComments.processor";
import CommentInterface from "../../utils/interfaces/comment.interface";
import SearchModal from "./SearchModal";

import { useSearch } from "../../hooks/useSearch";
import { useEffect, useState } from "react";
import { BiSlider } from "react-icons/bi";
import { RowInterface } from "../Table/props";
import { CommentTopicEnum } from "../../utils/enums/commentTopic.enum";
import { lastReviewsTableHeader, takeReviewsTable } from "./constants";

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
import commentSentimentHandler from "../../utils/handlers/commentSentiment.handler";

export default function LatestReviews() {
  const toast = useToast();
  const searchModalController = useDisclosure();

  const { valueToSearch } = useSearch();

  const [topic, setTopic] = useState<CommentTopicEnum | undefined>();
  const [dateStart, setDateStart] = useState<Date | undefined>();
  const [dateEnd, setDateEnd] = useState<Date | undefined>();

  const [cursor, setCursor] = useState<string | undefined>();
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
  const [lastReviewsTableRows, setLastReviewsTableRows] = useState<
    RowInterface[]
  >([]);

  const responseQueryCommentsProcessor = queryCommentsProcessor(
    {
      take: takeReviewsTable,
      cursor,
      hasNextPage,
      hasPreviousPage,
    },
    { comment: valueToSearch, dateDone: dateEnd, dateStart: dateStart, topic }
  );

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [valueToSearch, topic, dateStart, dateEnd]);

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

    setCursor(comments.meta.cursor);
    setHasNextPage(comments.meta.hasNextPage ?? true);
    setHasPreviousPage(comments.meta.hasPreviousPage ?? false);

    refreshTable(comments.data);
  };

  const refreshTable = (newComments: CommentInterface[]) => {
    const newLastReviewsTableRows: RowInterface[] = [];

    newComments.forEach((newComment) => {
      newLastReviewsTableRows.push({
        cells: [
          { align: "left", element: moment(newComment.createdAt).locale('pt-br').format("DD/MM/YYYY") },
          {
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
            align: "left",
            element: newComment.text,
          },
        ],
      });
    });

    setLastReviewsTableRows(newLastReviewsTableRows);
  };

  const applyFilters = (
    newTopic?: CommentTopicEnum,
    newDateStart?: Date,
    newDateEnd?: Date
  ) => {
    setTopic(newTopic);
    setDateStart(newDateStart);
    setDateEnd(newDateEnd);
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

            getComments();
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

            getComments();
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
