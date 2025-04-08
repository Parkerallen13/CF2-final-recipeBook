import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Title, Stack } from '@mantine/core';

const Home: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
        <Container>
            <Stack align="center" justify="center" style={{ height: '100vh' }}>
                <Title order={1}>Welcome to Parker's Recipes</Title>
                <Button onClick={() => navigate('my-app/src/pages/RecipeHome.tsx')}>Recipes Home</Button>
                <Button onClick={() => navigate('my-app/src/pages/MyRecipes.tsx')}>My Recipes</Button>
                <Button onClick={() => navigate('my-app/src/pages/AddRecipes.tsx')}>Add Recipe</Button>
            </Stack>
        </Container>
        </>
    );
};

export default Home;