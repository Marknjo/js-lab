import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Layouts/Header";
import Page404 from "../components/Pages/Page404.component";




const Home = () => (
	<div className="container">
		<h2>Home Page</h2>
		<p>
			Welcome to learning CSS Grids
		</p>
	</div>
);

const AppRouter = () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="*" component={Page404} />
			</Switch>
		</>
	</Router>
);

export default AppRouter;
