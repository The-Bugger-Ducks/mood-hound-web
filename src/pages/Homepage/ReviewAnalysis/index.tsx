import EvolutionTopics from "../../../components/EvolutionTopics";
import LatestReviews from "../../../components/LatestReviews";
import MostDiscussedTopics from "../../../components/MostDiscussedTopics";
import ReviewsByState from "../../../components/ReviewsByState";
import ReqReviewAnalysisInterface from "../../../utils/interfaces/reqReviewAnalysis.interface";
import reviewAnalysisRequests from "../../../utils/requests/reviewAnalysis.requests";

import { useEffect, useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";

export default function ReviewAnalysis() {
  const toast = useToast();
  const [analysis, setAnalysis] = useState<ReqReviewAnalysisInterface>();

  useEffect(() => {
    getAnalysis();
  }, []);

  const getAnalysis = async () => {
    const newAnalysis = await reviewAnalysisRequests.getAnalysis();

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
        <MostDiscussedTopics />
        <EvolutionTopics />
      </Flex>

      <ReviewsByState />

      <LatestReviews />
    </>
  );
}
