import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.scss';
import './css/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { TaskProvider } from './context/TaskContext';
import PendingTasks from './pages/PendingTasks';
import { ToastProvider } from './context/ToastContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <ToastProvider>
          <Layout>
            <Routes>
              <Route path='/' Component={ Home } />
              <Route path='/tarefas' Component={ PendingTasks } />
            </Routes>
          </Layout>
        </ToastProvider>
      </TaskProvider>
    </BrowserRouter>
  </StrictMode>,
)
