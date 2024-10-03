import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { FC } from 'react';
import { TasksPage } from './pages/TasksPage/TasksPage';
import { OptionsPage } from './pages/OptionsPage/OptionsPage';
import { Footer } from './components/Footer/Footer';
import { ProductionPage } from "./pages/ProductionPage/ProductionPage"
import { ScanPage } from './pages/ScanPage/ScanPage';
import { InvoicesExpense } from './pages/ProductionPage/ProductionCategory/InvoicesExpense';
import { Inventory } from './pages/ProductionPage/ProductionCategory/Inventory';
import { InvoicesArrival } from './pages/ProductionPage/ProductionCategory/InvoicesArrival';
import { LimitCards } from './pages/ProductionPage/ProductionCategory/LimitCards';
import { Nomenclature } from './pages/ProductionPage/ProductionCategory/Nomenclature';
import { InvoicesExpenseItems } from './pages/ProductionPage/ProductionCategory/InvoicesExpense/InvoicesExpenseItems';
import { InvoicesExpenseSearch } from './pages/ProductionPage/ProductionCategory/InvoicesExpense/InvoicesExpenceSearch';
import { InvoicesArrivalItems } from './pages/ProductionPage/ProductionCategory/InvoicesArrival/InvoicesArrivalItems';
import { ExpenseItemsInfo } from './pages/ProductionPage/ProductionCategory/InvoicesExpense/ExpenceItemsInfo';
import { ArrivalItemsInfo } from './pages/ProductionPage/ProductionCategory/InvoicesArrival/ArrivalItemsInfo';

export const App: FC = () => {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/tasks" element={<TasksPage />}/>
        <Route path="/tasks/production" element={<ProductionPage />}/>

        <Route path="/tasks/production/inventory" element={<Inventory />}/>
        <Route path="/tasks/production/invoices-arrival" element={<InvoicesArrival />}/>
        <Route path="/tasks/production/invoices-arrival/search" element={<InvoicesExpenseSearch />}/>
        <Route path="/tasks/production/invoices-arrival/:id" element={<InvoicesArrivalItems />}/>
        <Route path="/tasks/production/invoices-arrival/:id/:id" element={<ArrivalItemsInfo />}/>

        <Route path="/tasks/production/invoices-expense" element={<InvoicesExpense />}/>
        <Route path="/tasks/production/invoices-expense/search" element={<InvoicesExpenseSearch />}/>
        <Route path="/tasks/production/invoices-expense/:id" element={<InvoicesExpenseItems />}/>
        <Route path="/tasks/production/invoices-expense/:id/:id" element={<ExpenseItemsInfo />}/>

        <Route path="/tasks/production/limit-cards" element={<LimitCards />}/>
        <Route path="/tasks/production/nomenclature" element={<Nomenclature />}/>

        <Route path="/options" element={<OptionsPage />}/>
        <Route path="/scan" element={<ScanPage />}/>
      </Routes>
      <Footer />
    </>

  );
}
