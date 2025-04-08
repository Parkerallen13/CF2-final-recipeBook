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
    category: string;
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


type RecipeSectionPageProps = {
    pageTitle: string;
    categoryFilter?: string; // Optional — used for category pages
  };

  export function RecipeSectionPage({ pageTitle, categoryFilter }: RecipeSectionPageProps) {
    const recentlyViewed = useRecentlyViewed();
  
    const filteredRecipes = categoryFilter
      ? recipeData.recipes.filter((r) => r.category.startsWith(categoryFilter))
      : recipeData.recipes;
  
    return (
      <AppShellLayout pageTitle={pageTitle}>
        {/* Recently Viewed Section */}
        <Title order={3} mb="xs">Recently Viewed</Title>
        {recentlyViewed.length > 0 ? (
          <SimpleGrid cols={3} spacing="lg" mb="xl">
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
  
        {/* Filtered Recipes Section */}
        <Title order={3} mb="xs">
          {categoryFilter ? `${categoryFilter} Recipes` : 'All Recipes'}
        </Title>
        {filteredRecipes.length > 0 ? (
          <SimpleGrid cols={3} spacing="lg">
            {filteredRecipes.map((r) => (
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
          <p>No recipes found for this category.</p>
        )}
      </AppShellLayout>
    );
  }

  export default RecipeSectionPage;