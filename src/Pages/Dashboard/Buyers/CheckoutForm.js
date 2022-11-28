import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
	const [cardError, setCardError] = useState("");
	const [success, setSuccess] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const { itemId, itemPrice, _id, email, name } = booking;
	console.log(booking);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("https://goodwill-store-server.vercel.app/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ itemPrice }),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [itemPrice]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});
		if (error) {
			setCardError(error.message);
		} else {
			setCardError("");
		}
		setSuccess("");
		setProcessing(true);
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: name,
						email: email,
					},
				},
			});
		if (confirmError) {
			setCardError(confirmError.message);
			return;
		}
		// console.log(paymentIntent);
		if (paymentIntent.status === "succeeded") {
			
			//store payment info in database
			const payment = {
				itemId: itemId,
				itemPrice,
				transactionId: paymentIntent.id,
				email,
				bookingId: _id,
			};
      fetch("https://goodwill-store-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
	 			
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("congrats! Your payment completed");
            setTransactionId(paymentIntent.id);
            			}
            		});
          }
        
          setProcessing(false);
      
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					className="btn btn-sm btn-primary mt-4"
					type="submit"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			<p className="text-red-500">{cardError}</p>
			{success && (
				<div>
					<p className="text-green-500">{success}</p>
					<p>Your transaction Id: {transactionId}</p>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
