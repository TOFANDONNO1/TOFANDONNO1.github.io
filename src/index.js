import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import './Stylesheets/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ChakraProvider>
        <App />


     </ChakraProvider> 
);
reportWebVitals();