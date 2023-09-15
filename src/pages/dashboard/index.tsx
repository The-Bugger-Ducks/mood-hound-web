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
    <Flex flexDir="column" gap="2.5rem" p="2.5rem">
      <Header />

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
    </Flex>
  );
}
