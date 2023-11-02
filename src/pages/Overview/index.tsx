import EvolutionTopics from "../../components/EvolutionTopics";
import MostDiscussedTopics from "../../components/MostDiscussedTopics";
import AgeRange from "../../components/CustumerAgeRange";
import CustumerGender from "../../components/CustumerGender";
import ReviewsByState from "../../components/ReviewsByState";
import ReviewAnalysisInterface from "../../utils/interfaces/reviewAnalysis.interface";
import reviewAnalysisRequests from "../../utils/requests/reviewAnalysis.requests";
import FilterModal from "./FilterModal";
import ReviewsByTheme from "../../components/ReviewsByTheme";

import { useEffect, useState } from "react";
import { useOverview } from "../../hooks/useOverview";
import { BiSlider } from "react-icons/bi";
import { CommentTopicEnum } from "../../utils/enums/commentTopic.enum";
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

export default function Overview() {
  const toast = useToast();
  const filterModalController = useDisclosure();

  const { dateEnd, dateStart, state, topic } = useOverview();
  const { setDateEnd, setDateStart, setState, setTopic } = useOverview();

  const [analysis, setAnalysis] = useState<ReviewAnalysisInterface>({
    rankingOfTopics: {
      resume: { negative: 0, neutral: 0, positive: 0, total: 0 },
      topics: [],
    },
    timeSeriesDataTopic: [],
    commentsPerState: [],
    custumerAgeRange: { labels: [], values: [] },
    custumerGender: { labels: [], values: [] },
  });

  useEffect(() => {
    getAnalysis();
  }, []);

  useEffect(() => {
    getAnalysis();
  }, [dateEnd, dateStart, state, topic]);

  const getAnalysis = async () => {
    const newAnalysis = await reviewAnalysisRequests.getAnalysis({
      dateStart,
      dateEnd,
      state,
      topic,
    });

    if (newAnalysis === "error") {
      toast({
        title: "Houve um erro ao carregar as análises das avaliações.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    setAnalysis(newAnalysis);
  };

  const filterOverview = (
    topic?: CommentTopicEnum,
    dateStart?: Date,
    dateEnd?: Date,
    state?: string
  ) => {
    setDateEnd(dateEnd);
    setDateStart(dateStart);
    setState(state);
    setTopic(topic);
  };
  return (
    <>
      <Flex flexDirection="column" gap="2rem">
        <Flex>
          <Text variant="title">Visão geral</Text>

          <Spacer />

          <Button
            size="sm"
            variant="ghost"
            color="teal.500"
            leftIcon={<Icon as={BiSlider} />}
            onClick={filterModalController.onOpen}
          >
            Filtrar
          </Button>
        </Flex>

        <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
          <CustumerGender data={analysis.custumerGender} />
          <AgeRange data={analysis.custumerAgeRange} />
        </Flex>

        <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
          <EvolutionTopics data={analysis.timeSeriesDataTopic} />
          <ReviewsByTheme data={analysis.rankingOfTopics} />
        </Flex>

        <Flex flexDirection={["column", "column", "row"]} gap={"2rem"}>
          <ReviewsByState data={analysis.commentsPerState} />
        </Flex>
      </Flex>

      <FilterModal
        isOpen={filterModalController.isOpen}
        onClose={filterModalController.onClose}
        confirmButton={filterOverview}
      />
    </>
  );
}
