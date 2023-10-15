import EvolutionTopics from "../../../components/EvolutionTopics";
import LatestReviews from "../../../components/LatestReviews";
import MostDiscussedTopics from "../../../components/MostDiscussedTopics";
import ReviewsByState from "../../../components/ReviewsByState";
import ReviewAnalysisInterface from "../../../utils/interfaces/reviewAnalysis.interface";
import reviewAnalysisRequests from "../../../utils/requests/reviewAnalysis.requests";

import { useEffect, useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";
import { useDashboard } from "../../../hooks/useDashboard";

export default function ReviewAnalysis() {
  const toast = useToast();
  const { dateEnd, dateStart, state, topic } = useDashboard();

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

  return (
    <>
      <Flex
        flexDirection={["column", "column", "row"]}
        gap={["0", "0", "2rem"]}
      >
        <MostDiscussedTopics data={analysis.rankingOfTopics} />
        <EvolutionTopics data={analysis.timeSeriesDataTopic} />
      </Flex>

      <ReviewsByState data={analysis.commentsPerState} />

      <LatestReviews />
    </>
  );
}
