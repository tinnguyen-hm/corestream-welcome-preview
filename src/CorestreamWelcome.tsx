"use client";

import { useRef } from "react";
import {
  ActionIcon,
  AspectRatio,
  Badge,
  Image,
  Divider,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

type CorestreamWelcomeProps = { onContinue: () => void };
const muted =
  "light-dark(var(--mantine-color-gray-7), var(--mantine-color-gray-4))";
const accent =
  "light-dark(var(--mantine-color-hike-7), var(--mantine-color-hike-2))";
const steps = [
  {
    number: "01",
    title: "Scan your feet",
    text: "Confirm your details, then follow the guided scan on your phone. No app download needed.",
  },
  {
    number: "02",
    title: "Order your pair",
    text: "Review and purchase your custom insoles after your scan. You pay only when you order.",
  },
  {
    number: "03",
    title: "Delivered to you",
    text: "We 3D print your pair and deliver them to your door.",
  },
  {
    number: "04",
    title: "Hike Fit Guarantee",
    text: "Each pair of Hike Medical custom insoles includes a Hike Fit Guarantee, which covers up to three rebuilds within 90 days of the original delivery date to fulfill the submitted order.",
  },
];

export function CorestreamWelcome({ onContinue }: CorestreamWelcomeProps) {
  const stepsViewport = useRef<HTMLDivElement>(null);
  const moveSteps = (direction: number) => {
    const viewport = stepsViewport.current;
    if (viewport)
      viewport.scrollBy({
        left: direction * viewport.clientWidth * 0.86,
        behavior: "smooth",
      });
  };
  return (
    <Box bg="var(--mantine-color-body)" pb={{ base: 28, sm: 48 }}>
      <Container size={1120} px={{ base: 22, sm: 32 }}>
        <Box component="header" pt={{ base: 18, sm: 24 }} pb={0}>
          <Image
            src="./assets/hike-logo-blue.svg"
            alt="Hike Medical"
            w={{ base: 180, sm: 230 }}
            ml={{ base: -22, sm: -28 }}
            h="auto"
            fit="contain"
          />
        </Box>
        <Box component="main">
          <Grid
            gutter={{ base: 24, md: 36 }}
            align="flex-start"
            pt={0}
            pb={{ base: 32, md: 36 }}
          >
            <Grid.Col span={{ base: 12, md: 6 }} order={1}>
              <Stack gap={18}>
                <Title
                  order={1}
                  fz={{ base: 36, sm: 44 }}
                  style={{ letterSpacing: "-0.04em" }}
                >
                  Step into comfort and real support with your new wellness
                  benefit.
                </Title>
                <Text size="lg" c={muted} lh={1.6}>
                  Hike custom insoles are designed to help your body find
                  alignment, for your budget, and your convenience.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 3, md: 2 }}>
              <Paper radius={24} style={{ overflow: "hidden" }} bg="black">
                <AspectRatio ratio={16 / 9}>
                  <video
                    src="./assets/user-journey-new.mp4"
                    poster="./assets/journey-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    aria-label="How Hike turns your foot scan into custom insoles"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </AspectRatio>
              </Paper>
              <Text ta="center" size="sm" c={muted} mt="sm">
                Your foot shape. Your custom fit.
              </Text>
            </Grid.Col>
            <Grid.Col span={12} order={{ base: 2, md: 3 }}>
              <Paper
                radius={24}
                p={{ base: 22, sm: 28 }}
                withBorder
                bg="light-dark(var(--mantine-color-hike-0), var(--mantine-color-dark-6))"
                style={{
                  borderColor:
                    "light-dark(var(--mantine-color-hike-1), var(--mantine-color-dark-4))",
                }}
              >
                <Grid gutter={{ base: 26, md: 40 }} align="center">
                  <Grid.Col span={{ base: 12, md: 5 }}>
                    <Stack gap={14}>
                      <Group justify="space-between" gap="xs">
                        <Text
                          size="xs"
                          fw={700}
                          tt="uppercase"
                          c={accent}
                          style={{ letterSpacing: "0.08em" }}
                        >
                          Your custom pair
                        </Text>
                        <Badge
                          variant="filled"
                          color="hike"
                          radius="sm"
                          size="lg"
                        >
                          Save 50–85%
                        </Badge>
                      </Group>
                      <Group gap="sm" align="baseline">
                        <Text
                          fz={56}
                          fw={700}
                          lh={1}
                          style={{ letterSpacing: "-0.045em" }}
                        >
                          $150
                        </Text>
                      </Group>
                      <Text size="sm" c={muted}>
                        Save <strong>50–85%</strong> versus the typical clinical
                        prices of <strong>$300–$1,000</strong>.
                      </Text>
                      <Button
                        fullWidth
                        onClick={onContinue}
                        rightSection={<span aria-hidden="true">→</span>}
                      >
                        Get started with my scan
                      </Button>
                      <Text size="xs" c={muted}>
                        First, confirm your details. No purchase required to
                        scan.
                      </Text>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 7 }}>
                    <Paper
                      radius="lg"
                      p={{ base: 18, sm: 22 }}
                      bg="var(--mantine-color-body)"
                    >
                      <Stack gap={12}>
                        <Text fw={700} size="md">
                          Choose how you pay
                        </Text>
                        <Box>
                          <Text fw={700} size="sm">
                            Payroll deduction
                          </Text>
                          <Text size="sm" c={muted}>
                            Eligible employees can pay via payroll deduction.
                          </Text>
                        </Box>
                        <Divider />
                        <Box>
                          <Text fw={700} size="sm">
                            Your preferred payment method
                          </Text>
                          <Text size="sm" c={muted}>
                            All common payment options available, including
                            Apple Pay and Google Pay.
                          </Text>
                        </Box>
                        <Divider />
                        <Box>
                          <Group gap="xs" mb={3}>
                            <Text fw={700} size="sm">
                              Prefer smaller payments?
                            </Text>
                            <Badge variant="light" color="hike" size="sm">
                              0% interest
                            </Badge>
                          </Group>
                          <Text size="sm" c={muted}>
                            Split the payment up with Affirm. 0% interest, no
                            hidden fees, no late fees.
                          </Text>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>
          </Grid>

          <Box component="section" py={{ base: 20, sm: 28 }}>
            <Divider mb={{ base: 28, sm: 36 }} />
            <SimpleGrid
              cols={{ base: 1, sm: 2 }}
              spacing={{ base: 28, sm: 48 }}
            >
              <Stack gap={12}>
                <Text
                  size="xs"
                  fw={700}
                  c={accent}
                  tt="uppercase"
                  style={{ letterSpacing: "0.1em" }}
                >
                  The problem
                </Text>
                <Title order={2}>A long day shouldn’t follow you home.</Title>
                <Text c={muted} lh={1.7}>
                  When your feet lack support, the strain can extend beyond your
                  feet. Your knees, hips, and lower back may compensate, leaving
                  you feeling worn out as the day goes on.
                </Text>
              </Stack>
              <Stack
                gap={12}
                pl={{ base: 18, sm: 28 }}
                style={{ borderLeft: "3px solid var(--mantine-color-hike-5)" }}
              >
                <Text
                  size="xs"
                  fw={700}
                  c={accent}
                  tt="uppercase"
                  style={{ letterSpacing: "0.1em" }}
                >
                  The Hike difference
                </Text>
                <Title order={2}>Support that starts with your shape.</Title>
                <Text c={muted} lh={1.7}>
                  Hike custom insoles are built to fit your actual foot shape,
                  helping your body move the way it's meant to, instead of
                  offloading the work up your skeleton.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>

          <Box
            component="section"
            py={{ base: 32, sm: 40 }}
            aria-label="Four steps to your custom fit"
          >
            <Group justify="space-between" gap="md" mb={18}>
              <Title order={2} fz={{ base: 25, sm: 28 }}>
                Your custom fit, step by step.
              </Title>
              <Group gap="xs" hiddenFrom="md">
                <ActionIcon
                  variant="default"
                  radius="xl"
                  aria-label="Previous step cards"
                  onClick={() => moveSteps(-1)}
                >
                  ←
                </ActionIcon>
                <ActionIcon
                  variant="default"
                  radius="xl"
                  aria-label="Next step cards"
                  onClick={() => moveSteps(1)}
                >
                  →
                </ActionIcon>
              </Group>
            </Group>
            <ScrollArea
              viewportRef={stepsViewport}
              type="auto"
              offsetScrollbars
              scrollbarSize={6}
              styles={{ viewport: { scrollSnapType: "x mandatory" } }}
            >
              <Flex gap={12} pb={8}>
                {steps.map((step) => (
                  <Paper
                    key={step.number}
                    withBorder
                    radius="lg"
                    p={18}
                    w={{
                      base: "86%",
                      sm: "46%",
                      md: "calc((100% - 36px) / 4)",
                    }}
                    style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                  >
                    <Stack gap={8}>
                      <Text c={accent} fw={700} size="xs">
                        {step.number}
                      </Text>
                      <Title order={3} fz={18}>
                        {step.title}
                      </Title>
                      <Text c={muted} size="sm" lh={1.6}>
                        {step.text}
                      </Text>
                    </Stack>
                  </Paper>
                ))}
              </Flex>
            </ScrollArea>
          </Box>

          <Box component="section" pt={{ base: 16, sm: 24 }} pb={12}>
            <Divider mb={{ base: 32, sm: 40 }} />
            <Grid gutter={{ base: 32, sm: 56 }} align="center">
              <Grid.Col span={{ base: 12, sm: 7 }}>
                <Stack gap={12}>
                  <Text
                    aria-hidden="true"
                    c={accent}
                    fz={76}
                    lh={0.65}
                    fw={700}
                  >
                    “
                  </Text>
                  <Text
                    component="blockquote"
                    m={0}
                    fz={{ base: 19, sm: 22 }}
                    lh={1.6}
                    fs="italic"
                  >
                    For years I have been dealing with knee pain. The day I went
                    to work with my custom insoles, I felt like a new man!
                    Walking didn't hurt. I felt like I could actually run, and
                    my knee pain disappeared!
                  </Text>
                  <Text size="sm" c={muted}>
                    Hike member
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 5 }}>
                <Stack gap={12} align="flex-start">
                  <Title order={2} fz={25}>
                    Made for you.
                    <br />
                    Ready when you are.
                  </Title>
                  <Text c={muted} size="sm">
                    $150 per pair. Scan first, decide afterward.
                  </Text>
                  <Button
                    fullWidth
                    onClick={onContinue}
                    rightSection={<span aria-hidden="true">→</span>}
                  >
                    Get started with my scan
                  </Button>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
