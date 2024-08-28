import { useContext } from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";

import { FirebaseContext } from "../context/FirebaseContext";
=======
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> c2b49d8b40be73ca4fef211e5fc5f2b385733870

import { CardsContainer } from "../components/CardsContainer";
import { CheckOut } from "../pages/CheckOut";
import { Detail } from "../pages/Detail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Modal } from "../pages/Modal";
import { NotFound } from "../pages/404";
import { OrderHistory } from "../pages/OrderHistory";
import { Register } from "../pages/Register";
<<<<<<< HEAD
=======
import { FirebaseContext } from "../context/FirebaseContext";
import { Modal } from "../pages/Modal";
import { OrderHistory } from "../pages/OrderHistory";
import { Home } from "../pages/Home";
>>>>>>> c2b49d8b40be73ca4fef211e5fc5f2b385733870

export const Main = () => {
	const { user } = useContext(FirebaseContext);
	return (
<<<<<<< HEAD
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Productos" element={<CardsContainer />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="detail/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
				<Route path="CheckOut" element={user && <CheckOut />} />
				<Route path="modal" element={<Modal />} />
				<Route path="OrderHistory" element={<OrderHistory />} />
			</Routes>
		</>
=======
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Productos" element={<CardsContainer />} />
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="detail/:id" element={<Detail />} />
			<Route path="*" element={<NotFound />} />
			<Route
				path="CheckOut"
				element={user ? <CheckOut /> : <Navigate to="/Login" />}
			/>
			<Route path="modal" element={<Modal />} />
			<Route path="OrderHistory" element={<OrderHistory />} />
		</Routes>
>>>>>>> c2b49d8b40be73ca4fef211e5fc5f2b385733870
	);
};
