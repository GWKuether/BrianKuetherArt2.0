import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { product } = props;

  return (
    <div>
      <PayPalButtons />
    </div>
  );
};

export default PaypalCheckoutButton;
