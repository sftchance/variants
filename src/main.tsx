import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AnimatePresence } from "framer-motion";

import { Post, Posts } from './components'

import App from './App'

import './style/index.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<App />} />
                            <Route path="post/" element={<Posts />} />
                            <Route path="post/:id/" element={<Post />} />
                        </Routes>
                    </AnimatePresence>
                </Router>
            </QueryClientProvider>
        </HelmetProvider>
    </React.StrictMode >
)
