import React from 'react';
import ReactDOMClient from 'react-dom/client';
import AppRouters from './routers/AppRouters';

const renderizar = document.getElementById('root')
ReactDOMClient.createRoot(renderizar).render(
 <AppRouters/>
)

