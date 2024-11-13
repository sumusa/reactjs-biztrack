import EmptyState from "../components/EmptyState";

const Products = () => {
  const handleCreateProduct = () => {
    // TODO: Implement product creation
    console.log("Create product clicked");
  };

  return (
    <EmptyState
      title="No products in stock!"
      message="Time to fill those shelves with something amazing"
      image="https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif"
      actionLabel="Add First Product"
      onAction={handleCreateProduct}
    />
  );
};

export default Products;
