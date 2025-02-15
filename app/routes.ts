import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("./pages/SignIn.jsx"),
    route("signup", "./pages/SignUp.jsx"),
    route("dashboard", './dashboard/Dashboard.jsx', [
        index("./dashboard/DashboardHome.jsx"),
        route('application-form', './dashboard/applicationForm.jsx'),
        route('application', './dashboard/application.jsx')
    ])


] satisfies RouteConfig;
