import React from 'react';
import { Button, Group, TextInput, Textarea, Container, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

type RecipeFormValues = {
  title: string;
  image?: string;
  ingredients: string;  // now a string
  directions: string;   // now a string
  notes?: string;
};

export default function AddRecipe() {
  const form = useForm<RecipeFormValues>({
    initialValues: {
      title: '',
      image: '',
      ingredients: '',
      directions: '',
      notes: '',
    },
    validate: {
      title: (value) =>
        value.trim().length > 0 ? null : 'Title is required',
      image: (value) =>
        !value || value.trim().startsWith('http')
          ? null
          : 'Please enter a valid image URL',
    },
  });

  const handleSave = (values: RecipeFormValues) => {
    const stored = localStorage.getItem('myRecipes');
    const existing = stored ? JSON.parse(stored) : [];

    const newRecipe = {
      id: Date.now(),
      title: values.title,
      image: values.image,
      notes: values.notes,
      ingredients: values.ingredients
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== ''),
      directions: values.directions
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== ''),
    };

    const updated = [newRecipe, ...existing];
    localStorage.setItem('myRecipes', JSON.stringify(updated));
    form.reset();
  };

  return (
    <Container size="sm" mt="lg">
      <Title order={2} mb="md">
        Add a New Recipe
      </Title>

      <form onSubmit={form.onSubmit(handleSave)}>
        <TextInput
          label="Title"
          placeholder="e.g., Avocado Toast"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <TextInput
          label="Image URL (optional)"
          placeholder="https://example.com/image.jpg"
          {...form.getInputProps('image')}
        />

        <Textarea
          label="Ingredients"
          placeholder="List ingredients, one per line"
          minRows={4}
          autosize
          {...form.getInputProps('ingredients')}
        />

        <Textarea
          label="Directions"
          placeholder="Step-by-step instructions"
          minRows={4}
          autosize
          {...form.getInputProps('directions')}
        />

        <Textarea
          label="Notes (optional)"
          placeholder="Optional tips or reminders"
          minRows={2}
          autosize
          {...form.getInputProps('notes')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Save Recipe</Button>
        </Group>
      </form>
    </Container>
  );
}