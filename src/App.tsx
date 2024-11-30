import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ReferenceForm } from 'src/pages'
import appStyles from './App.module.scss';

export const App = () => {
  return (
    <main className={appStyles.app__wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/reference" replace />} />
          <Route path="/reference" element={<ReferenceForm />} />
          <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
