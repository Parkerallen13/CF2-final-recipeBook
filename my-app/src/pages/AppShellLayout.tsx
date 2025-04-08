import React from 'react';
import {
    AppShell,
    AppShellHeader,
    AppShellMain,
    Group,
    Title,
    Image,
    Menu,
    Button,
    Container
  } from '@mantine/core';
  import { ReactNode } from 'react';

  type AppShellLayoutProps = {
    pageTitle: string;
    children: ReactNode;
  };

  
export default function AppShellLayout({ pageTitle, children }: AppShellLayoutProps) {
    return (
      <AppShell padding="md">
        {/* Header Section */}
        <AppShellHeader p="md" h={70}>
          <Group justify="space-between" align="center" h="100%">
            {/* Left: Logo + Title */}
            <Group>
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <Title order={2}>My Recipe Book</Title>
            </Group>
  
            {/* Right: Navigation Menus */}
            <Group>
              <Menu trigger="hover" openDelay={100} closeDelay={200}>
                <Menu.Target>
                  <Button variant="subtle">Breakfast</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>All</Menu.Item>
                  <Menu.Item>Smoothies</Menu.Item>
                  <Menu.Item>Pancakes</Menu.Item>
                </Menu.Dropdown>
              </Menu>
  
              <Menu trigger="hover" openDelay={100} closeDelay={200}>
                <Menu.Target>
                  <Button variant="subtle">Lunch</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>All</Menu.Item>
                  <Menu.Item>Sandwiches</Menu.Item>
                  <Menu.Item>Salads</Menu.Item>
                </Menu.Dropdown>
              </Menu>
  
              <Menu trigger="hover" openDelay={100} closeDelay={200}>
                <Menu.Target>
                  <Button variant="subtle">Dinner</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>All</Menu.Item>
                  <Menu.Item>Pasta</Menu.Item>
                  <Menu.Item>Stir Fry</Menu.Item>
                </Menu.Dropdown>
              </Menu>
  
              <Menu trigger="hover" openDelay={100} closeDelay={200}>
                <Menu.Target>
                  <Button variant="subtle">My Recipes</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Favorites</Menu.Item>
                  <Menu.Item>Saved</Menu.Item>
                </Menu.Dropdown>
              </Menu>
  
              <Button variant="subtle">Recently Viewed</Button>
            </Group>
          </Group>
        </AppShellHeader>
  
        {/* Main Page Content */}
        <AppShellMain>
          <Container size="lg">
            <Title order={3} mt="md" mb="md">
              {pageTitle}
            </Title>
            {children}
          </Container>
        </AppShellMain>
      </AppShell>
    );
  }