import React from 'react';
import { AppShellLayout } from './AppShellLayout';
import { RecipeCard } from './RecipeCard';
import { SimpleGrid, Title } from '@mantine/core';
import recipeData from './recipes.json';
import { useEffect, useState } from 'react';

type Recipe = {
    id: number;
    title: string;
    image: string
    cookTime?: string;
    ingredients?: string[];
    instructions?: string[];
};

function useRecentlyViewed(): Recipe[] {
    const [Recent, setRecent] = useState<Recipe[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('recentlyViewed');
        if(stored) {
            try{
               const parsed = JSON.parse(stored);
               if (Array.isArray(parsed)) {
                setRecent(parsed);
               }
            }catch(error) {
                console.error("Error parsing recently viewed recipes:", error);
            }
           
        }
    }, []);

    return Recent;
}

export default function Home(){
    const recentlyViewed = useRecentlyViewed();
    const newRecipes = 
    recipeData.recipes.length > 0 ? recipeData.recipes.slice(-3) : []; //last 3 recipes added if any

    return (
        <AppShellLayout pageTitle="Home">
      {/* Recently Viewed Section */}
      <Title order={3} mb="xs">
        Recently Viewed
      </Title>
      {recentlyViewed.length > 0 ? (
        <SimpleGrid cols={3} spacing="lg">
          {recentlyViewed.map((r) => (
            <RecipeCard
              key={r.id}
              title={r.title}
              image={r.image}
              checked={false}
              onCheck={() => {}}
            />
          ))}
        </SimpleGrid>
      ) : (
        <p>No recently viewed recipes yet.</p>
      )}

      {/* New Recipes Section */}
      <Title order={3} mt="xl" mb="xs">
        New Recipes
      </Title>
      <SimpleGrid cols={3} spacing="lg">
        {newRecipes.map((r) => (
          <RecipeCard
            key={r.id}
            title={r.title}
            image={r.image}
            checked={false}
            onCheck={() => {}}
          />
        ))}
      </SimpleGrid>
    </AppShellLayout>
    );
}

