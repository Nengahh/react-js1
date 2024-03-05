import { Header,QuestionList, PrivateRoute } from "./Components/Atoms";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ScoreById, Home, EditQuestion, Login, EditQuiz,Example, Questationlist,CreateQuiz,Pertanyaan} from "./Pages";

// import RoleBasedRoute from "./service/rolebase"; 


function App() {
  const isAuth = localStorage.getItem("isAuthenticated");

  // cara 1
  const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // cara 2
  const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <div className="fixed z-10 top-0 left-0 w-full px-[10%] bg-gray-100/60">
        <Header />
      </div>

      <Routes>

        <Route path="/admin" element={<Example />} />
        <Route path="/admin/createquiz" element={<CreateQuiz />} />
        <Route path="/admin/editquiz" element={<EditQuiz />} />
        <Route path="/admin/editpertanyaan" element={<EditQuestion />} />
        <Route path="/admin/skor" element={<ScoreById />} />
        <Route path="/admin/Pertanyaan" element={<Pertanyaan />} />
            <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/quiz/:id" element={QuestionList} /> */}
        <Route path="/question/:id" element={<Questationlist/>} />
        
        {/*  cara 1 */}
        <Route
          path="/question/:id"
          element={
            <PrivateRoute auth={{ isAuthenticated: true }}>
              <Questationlist/>
            </PrivateRoute>
          }
        />
            
      </Routes>


      <PrivateRoute auth={{ isAuthenticated: true }}>
        <Questationlist/>
      </PrivateRoute>

      
    </BrowserRouter>
  );
}

export default App;
