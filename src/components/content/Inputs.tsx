import Card from "../ui/Card";
import Input from "../ui/Input";

export default function Inputs() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2>Inputs</h2>
      <Card className="mt-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            label="Text Input"
            placeholder="Enter Name..."
          />
          <Input
            id="age"
            name="age"
            type="number"
            label="Number Input"
            placeholder="Enter Age..."
          />
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            label="Input With Helper"
            placeholder="Enter Email..."
            helperText="We'll never share your email"
          />
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            label="Error State"
            placeholder="Enter Username..."
            error="This field is required"
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Password Input"
            placeholder="Enter password..."
          />
          <Input
            id="disabled"
            name="disabled"
            type="text"
            label="Disabled State"
            placeholder="Disabled"
            disabled
          />
          <Input
            id="textarea"
            as="textarea"
            label="Textarea"
            placeholder="Enter your message..."
          />
        </div>
      </Card>
    </section>
  );
}
