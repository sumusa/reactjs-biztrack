import EmptyState from "../components/EmptyState";

const Dashboard = () => {
  const handleGetStarted = () => {
    // TODO: Implement get started action
    console.log("Get started clicked");
  };

  return (
    <EmptyState
      title="Nothing to see here... yet!"
      message="Your dashboard is feeling a bit empty right now"
      image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2JrY2N2Yng4NWRwOWR1NmRzOWdvNnBqcnhyaHF1bG95YjhmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UHAYP0FxJOmFBuOiC2/giphy.gif"
      actionLabel="Get Started"
      onAction={handleGetStarted}
    />
  );
};

export default Dashboard;
