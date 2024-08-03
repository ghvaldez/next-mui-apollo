'use client';

import * as React from 'react';

import Container from '@mui/material/Container';

import Header from "./ui/Header";
import Hero from "./ui/landingPage/Hero";


export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};