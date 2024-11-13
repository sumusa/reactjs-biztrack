import EmptyState from "../components/EmptyState";

const Help = () => {
  const handleContactSupport = () => {
    // TODO: Implement support contact
    console.log("Contact support clicked");
  };

  return (
    <EmptyState
      title="Help is on the way!"
      message="Our help center is currently under construction"
      image="https://media.giphy.com/media/3o7TKHVU0xsgGDCyPu/giphy.gif"
      actionLabel="Contact Support"
      onAction={handleContactSupport}
    />
  );
};

export default Help;
