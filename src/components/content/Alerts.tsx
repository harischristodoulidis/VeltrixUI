import Alert from "../ui/Alert";

export default function Alerts() {
  return (
    <div className="mb-6">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Alerts
      </h3>
      <div className="space-y-4">
        <Alert title="Information">
          This is an informational alert with important details.
        </Alert>
        <Alert variant="success" title="Success">
          This is an alert with a successful message
        </Alert>
        <Alert variant="warning" title="Warning">
          This is an alert with a warning message
        </Alert>
        <Alert variant="error" title="Error">
          This is an alert with an error message
        </Alert>
      </div>
    </div>
  );
}
