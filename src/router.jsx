// AppRouter.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import carta from './pages/carta.jsx';
import cards from './pages/cards.jsx';
import canvas from './pages/canvas.jsx';
const AppRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/carta" component={carta} />
        <Route path="/card" component={cards} />
        <Route path="/canvas" component={canvas} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
