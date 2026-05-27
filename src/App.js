import './App.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import HomeSection from './HomeSection';
import MessengerSection from './MessengerSection';
import BoardSection from './BoardSection';
import { PAGE_NAMES, AI_INPUT_VERSIONS, PAGE_NAMES_LABELS } from './constants';

function App() {

  const [currentPage, setCurrentPage] = useState(PAGE_NAMES.HOME);
  const [aiInput, setAiInput] = useState(AI_INPUT_VERSIONS.V1);
  const [currentServices, setCurrentServices] = useState(PAGE_NAMES_LABELS.HOME);
  return (
    <>
      <Header currentServices={currentServices} />
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} setCurrentServices={setCurrentServices} />
      {currentPage === PAGE_NAMES.HOME ? (
        <HomeSection aiInput={aiInput} setAiInput={setAiInput} />
      ) : currentPage === PAGE_NAMES.MESSENGER ? (
        <MessengerSection currentPage={currentPage} setCurrentPage={setCurrentPage} />
      ) : (
        <BoardSection currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

export default App;
