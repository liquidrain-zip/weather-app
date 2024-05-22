import Alert from "react-bootstrap/Alert";

function AlertDismissible({ error }) {
  if (error) {
    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{error}</p>
      </Alert>
    );
  }
  return null;
}

export default AlertDismissible;
