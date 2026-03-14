import Button from "../ui/Button";
import Card from "../ui/Card";

export default function Buttons() {
  return (
    <section className="my-12 sm:mb-16">
      <h2>Buttons</h2>
      <Card className="mt-4">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button loading variant="primary">
            Loading...
          </Button>
        </div>
      </Card>
    </section>
  );
}
