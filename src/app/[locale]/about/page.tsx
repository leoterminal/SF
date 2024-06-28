import React from 'react';
import NotFound from '@/app/not-found'; // Adjust import path as per your project structure
import { useNavigation } from 'next/navigation'; // Use next/navigation for server components

const About = () => {
  const navigation = useNavigation();

  // Example: Check if current route is not '/en/about' or '/tr/about'
  const shouldShowNotFound = navigation.pathname !== '/en/about' && navigation.pathname !== '/tr/about';

  if (shouldShowNotFound) {
    // Return NotFound component if the condition is true
    return <NotFound />;
  }

  return (
    // Return About component if the condition is false
    <div>About</div>
  );
};

export default About;
