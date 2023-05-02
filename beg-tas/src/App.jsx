import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./Main Page/MainPage";
import { LoginPage } from "./Login/LoginPage";
import { RegisterPage } from "./Login/RegisterPage";
import { Profile } from "./Profile/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                            <Route
                                path="/home"
                                element={
                                        <MainPage />
                                }
                            />
                            <Route
                                path="/bookmark"
                                element={
                                        <MainPage bookmark={true} />
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                        <Profile />
                                }
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/login" replace />}
                            />
                        </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
