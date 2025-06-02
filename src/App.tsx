import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

const Chats = lazy(() => import("./routes/Chats"));
const SignUp = lazy(() => import("./routes/SignUp"));
const SignIn = lazy(() => import("./routes/SignIn"));
const Groups = lazy(() => import("./routes/Groups"));
const Profile = lazy(() => import("./routes/Profile"));
const Settings = lazy(() => import("./routes/Settings"));
const MainLayout = lazy(() => import("./components/layouts/MainLayout"));
const DashboardLayout = lazy(() => import("./components/layouts/DashboardLayout"));

function App() {
  return (
    <Router basename="/chatkit">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Auth layout */}
          <Route element={<MainLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Dashboard layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to={"/chats"} replace />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
