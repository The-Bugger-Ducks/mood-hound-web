import { Flex } from "@chakra-ui/react";

import EvolutionTopics from "../../../components/EvolutionTopics";
import LatestReviews from "../../../components/LatestReviews";
import MostDiscussedTopics from "../../../components/MostDiscussedTopics";
import ReviewsByState from "../../../components/ReviewsByState";

export default function ReviewAnalysis() {
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
