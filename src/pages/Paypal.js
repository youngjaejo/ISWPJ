import React, { useRef, useEffect, useState } from "react";

export default function Paypal(props) {
  const paypal = useRef();
  useEffect(() => {
    console.log(props.amount);
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Donation",
                amount: {
                  currency_code: "USD",
                  value: props.amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          alert("Transaction complete!");
        },
        onError: (err) => {
          alert("Please type more than $0 or We will fix it ASAP");
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
