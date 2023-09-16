import ReviewAnalysis from "./ReviewAnalysis";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Tabs>
      <TabList>
        <Tab>Análise de avaliações</Tab>
        <Tab>Informações do sistema</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p="0">
          <ReviewAnalysis />
        </TabPanel>

        <TabPanel p="0">
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
