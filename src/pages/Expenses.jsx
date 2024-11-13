import EmptyState from "../components/EmptyState";

const Expenses = () => {
  const handleAddExpense = () => {
    // TODO: Implement expense creation
    console.log("Add expense clicked");
  };

  return (
    <EmptyState
      title="No expenses tracked!"
      message="Either you're really good at saving, or we need to start tracking..."
      image="https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif"
      actionLabel="Record First Expense"
      onAction={handleAddExpense}
    />
  );
};

export default Expenses;
