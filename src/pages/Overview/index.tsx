import EvolutionTopics from "../../components/EvolutionTopics";
import MostDiscussedTopics from "../../components/MostDiscussedTopics";
import ReviewsByState from "../../components/ReviewsByState";
import ReviewAnalysisInterface from "../../utils/interfaces/reviewAnalysis.interface";
import reviewAnalysisRequests from "../../utils/requests/reviewAnalysis.requests";
import FilterModal from "./FilterModal";

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
    rankingOfTopics: [],
    timeSeriesDataTopic: [],
    commentsPerState: [],
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
          <MostDiscussedTopics data={analysis.rankingOfTopics} />
          <EvolutionTopics data={analysis.timeSeriesDataTopic} />
        </Flex>

        <ReviewsByState data={analysis.commentsPerState} />
      </Flex>

      <FilterModal
        isOpen={filterModalController.isOpen}
        onClose={filterModalController.onClose}
        confirmButton={filterOverview}
      />
    </>
  );
}
