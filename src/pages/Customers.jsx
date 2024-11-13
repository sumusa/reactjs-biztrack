import EmptyState from "../components/EmptyState";

const Customers = () => {
  const handleAddCustomer = () => {
    // TODO: Implement customer creation
    console.log("Add customer clicked");
  };

  return (
    <EmptyState
      title="Where is everybody?"
      message="Your customer list is looking a bit lonely"
      image="https://media.giphy.com/media/ZgqJGwh2tLj5C/giphy.gif"
      actionLabel="Add First Customer"
      onAction={handleAddCustomer}
    />
  );
};

export default Customers;
