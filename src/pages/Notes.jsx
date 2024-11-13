import EmptyState from "../components/EmptyState";

const Notes = () => {
  const handleCreateNote = () => {
    // TODO: Implement note creation
    console.log("Create note clicked");
  };

  return (
    <EmptyState
      title="Your mind is clear!"
      message="No tasks or notes to worry about... for now"
      image="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
      actionLabel="Create First Note"
      onAction={handleCreateNote}
    />
  );
};

export default Notes;
