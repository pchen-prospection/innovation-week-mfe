import React from 'react';

export default function App({ helloText }: {helloText: string}) {
  return (
    <>
      <h1>Test Microfrontend</h1>
      <span>{helloText}</span>
    </>
  );
}
