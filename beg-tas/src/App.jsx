import "./App.css";
import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./Main Page/MainPage";
import { LoginPage } from "./Login/LoginPage";
import { RegisterPage } from "./Login/RegisterPage";
import { Profile } from "./Profile/Profile";
import { AuxContext } from "./context/AuthContext";
import { PostContext } from "./context/PostContext";

function App() {
    const [aux_token, setAuxToken] = useState();
    const [main_token, setMainToken] = useState();
    const [posts, setPosts] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <AuxContext.Provider
                    value={{ aux_token, setAuxToken, main_token, setMainToken }}
                >
                    <PostContext.Provider value={{ posts, setPosts }}>
                        <Routes>
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                            <Route
                                path="/home"
                                element={
                                    <ProtectedRoute>
                                        <MainPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/bookmark"
                                element={
                                    <ProtectedRoute>
                                        <MainPage bookmark={true} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/login" replace />}
                            />
                        </Routes>
                    </PostContext.Provider>
                </AuxContext.Provider>
            </BrowserRouter>
        </div>
    );
}

const ProtectedRoute = (props) => {
    const { aux_token, setAuxToken } = useContext(AuxContext);
    const [check, setCheck] = useState(false);
    useEffect(() => {
        const fetch_data = async () => {
            const aux_token = localStorage.getItem("aux_token");
            if (aux_token) {
                await setAuxToken(aux_token);
            }
            setCheck(true);
        };
        fetch_data();
    }, []);

    if (check) {
        if (!aux_token) {
            return <Navigate to="/" replace />;
        }

        return props.children;
    }
};

export default App;
