import React, { useEffect, useRef } from "react";

function PayPalButton() {
  const paypalRef = useRef();

  useEffect(() => {
    console.log(window.paypal);
    const paypalLoadCallback = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Cool looking table",
                  amount: {
                    currency_code: "USD",
                    value: 650.0,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypalRef.current);
    };

    if (window.paypal) {
      paypalLoadCallback();
      console.log("This works");
    } else {
      console.log("This does not work");
      window.paypal = {
        Buttons: paypalLoadCallback,
      };
    }
  }, []);

  return (
    <div>
      <div ref={paypalRef}></div>
    </div>
  );
}

export default PayPalButton;
