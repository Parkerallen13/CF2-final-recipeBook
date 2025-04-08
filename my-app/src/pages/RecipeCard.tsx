import React from 'react';
import { Card, Button, Image, Text, Checkbox, Group } from '@mantine/core';

type RecipeCardProps = {
    title: string;
    image: string;
    checked: boolean;
    onCheck: (value: boolean) => void;
};

export function RecipeCard({ title, image, checked, onCheck }: RecipeCardProps) {
    return (
        <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={image}
            height={160}
            alt={title}
          />
        </Card.Section>
  
        <Group justifyContent="space-between" mt="md" mb="xs">
          <Text fw={500}>{title}</Text>
          <Checkbox checked={checked} onChange={(e) => onCheck(e.currentTarget.checked)} />
        </Group>
  
        <Button color="brown" fullWidth mt="md" radius="md">
          Go to Recipe
        </Button>
      </Card>
      </>
    );
};

export default RecipeCard;