import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ActionIcon,
  Affix,
  Button,
  MantineProvider,
  Modal,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { CorestreamWelcome } from "./CorestreamWelcome";
import { theme } from "./theme";

function Preview() {
  const [opened, setOpened] = useState(false);
  const { toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <CorestreamWelcome onContinue={() => setOpened(true)} />
      <Affix position={{ bottom: 12, right: 12 }}>
        <ActionIcon
          variant="default"
          size="lg"
          radius="xl"
          aria-label="Toggle light or dark preview"
          onClick={() => toggleColorScheme()}
        >
          ◐
        </ActionIcon>
      </Affix>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Next: confirm your details"
        centered
      >
        <Stack>
          <Text>
            This is a review draft. In the finished flow, this button will open
            the existing details screen, followed by the guided scan.
          </Text>
          <Text c="dimmed" size="sm">
            No account, scan, or purchase has been started.
          </Text>
          <Button onClick={() => setOpened(false)}>Back to the draft</Button>
        </Stack>
      </Modal>
    </>
  );
}

const root = document.getElementById("root");
if (root)
  createRoot(root).render(
    <React.StrictMode>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Preview />
      </MantineProvider>
    </React.StrictMode>,
  );
