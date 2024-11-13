const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-gray-600">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2JrY2N2Yng4NWRwOWR1NmRzOWdvNnBqcnhyaHF1bG95YjhmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UHAYP0FxJOmFBuOiC2/giphy.gif"
        alt="Nothing to see here"
        className="w-64 h-64 mb-4 rounded-lg"
      />
      <h2 className="text-2xl font-bold mb-2">Nothing to see here... yet!</h2>
      <p className="text-gray-500">
        Your dashboard is feeling a bit empty right now
      </p>
    </div>
  );
};

export default Dashboard;
