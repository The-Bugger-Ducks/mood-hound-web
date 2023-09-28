import ReviewAnalysis from "./ReviewAnalysis";
import SystemInformation from "./SystemInformation";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Homepage() {
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
          <SystemInformation />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}