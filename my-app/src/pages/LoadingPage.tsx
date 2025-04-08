import React from "react";
import {
    Button,
    Center,
    Image,
    Stack,
    Title,
    Group
  } from '@mantine/core';
  import { useEffect, useState } from 'react';
  import logo from 'my-app/public/logo512.png'; 
  
  const letters = "Parker's Recipes".split('');
  
  function getRandomPosition(): { top: string; left: string; rotate: string } {
    return {
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      rotate: `${Math.random() * 360}deg`,
    };
  }
  
  export default function LoadingPage() {
    const [positions, setPositions] = useState<{ top: string; left: string; rotate: string }[]>(
      []
    );
  
    useEffect(() => {
      setPositions(letters.map(() => getRandomPosition()));
    }, []);
  
    return (
      <div style={{ position: 'relative', height: '100vh', backgroundColor: '#fff' }}>
        {/* Floating Letters */}
        {letters.map((char, index) => (
          <span
            key={index}
            style={{
              position: 'absolute',
              top: positions[index]?.top || '50%',
              left: positions[index]?.left || '50%',
              transform: `rotate(${positions[index]?.rotate})`,
              fontSize: '2rem',
              fontWeight: 700,
              color: '#555',
              opacity: 0.25,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            {char}
          </span>
        ))}
  
        {/* Centered Logo + Buttons */}
        <Center style={{ height: '100vh', zIndex: 2, position: 'relative' }}>
          <Stack align="center" >
            <Image src={logo} width={100} alt="Logo" />
            <Title order={1} style={{ fontFamily: 'Georgia, serif' }}>
              Parker's Recipes
            </Title>
            <Group>
              <Button size="md" variant="filled" color="teal">
                Recipe Home
              </Button>
              <Button size="md" variant="outline" color="gray">
                Login
              </Button>
            </Group>
          </Stack>
        </Center>
      </div>
    );
  }