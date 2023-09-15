import Header from "../../components/Header";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Tabs>
      <TabList>
        <Tab>Análise de avaliações</Tab>
        <Tab>Informações do sistema</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>

        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
