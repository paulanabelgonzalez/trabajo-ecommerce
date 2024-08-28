import { useContext, useEffect } from "react";

import { useNavigate } from "react-router";

import { Box, Button, Typography } from "@mui/material";

import { CartContext } from "../context/CartContext";
import { FirebaseContext } from "../context/FirebaseContext";

export const CheckOut = () => {
<<<<<<< HEAD
	const { cart, subtotal, subTotalProduct, handledeleteAll } =
		useContext(CartContext);
=======
	const { cart, subtotal, subTotalProduct, setCart } = useContext(CartContext);
>>>>>>> c2b49d8b40be73ca4fef211e5fc5f2b385733870
	const { finalizePurchase, setModal } = useContext(FirebaseContext);
	const navigate = useNavigate();

	const handlefinalizePurchase = () => {
		finalizePurchase(cart, subtotal);
		setModal(1);
		navigate("/modal");
<<<<<<< HEAD
		handledeleteAll();
=======
		setCart([]);
>>>>>>> c2b49d8b40be73ca4fef211e5fc5f2b385733870
	};

	useEffect(() => {
		if (cart.length === 0) {
			navigate("/");
		}
	}, [cart, navigate]);

	return (
		<Box sx={{ backgroundColor: "white" }}>
			<Button onClick={() => navigate("/")}>Regresar</Button>
			<Typography>Tu pedido</Typography>
			{cart.map((product) => (
				<Box
					key={product.id}
					sx={{
						padding: 2,
						borderBottom: "1px solid #ddd",
						textAlign: "center",
					}}
				>
					<Typography>{product.quantity}</Typography>
					<Typography variant="h6">{product.name}</Typography>
					<img
						src={product.image}
						alt={product.name}
						style={{ borderRadius: "100px", width: "100px" }}
					/>
					<Typography variant="body2">Precio: ${product.price}</Typography>
					<Typography>Subtotal:${subTotalProduct(product)}</Typography>
				</Box>
			))}
			<Typography>Total: $ {subtotal} </Typography>
			<Button onClick={handlefinalizePurchase}>Finalizar compra</Button>
		</Box>
	);
};
