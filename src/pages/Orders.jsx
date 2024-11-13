import EmptyState from "../components/EmptyState";

const Orders = () => {
  const handleCreateOrder = () => {
    // TODO: Implement order creation
    console.log("Create order clicked");
  };

  return (
    <EmptyState
      title="No orders yet!"
      message="Waiting for those orders to start rolling in..."
      image="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif"
      actionLabel="Create Test Order"
      onAction={handleCreateOrder}
    />
  );
};

export default Orders;
