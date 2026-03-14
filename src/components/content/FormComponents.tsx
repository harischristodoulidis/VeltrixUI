import { useState } from "react";
import Card from "../ui/Card";
import Checkbox from "../ui/Checkbox";
import RadioGroup from "../ui/RadioGoup";

export default function FormComponents() {
  const [ssChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("5");

  return (
    <section className="mb-12 sm:mb-16">
      <h2>Form Components</h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        <Card className="mt-4">
          <h3 className="text-card-foreground mb-6 text-lg font-semibold">
            Checkbox
          </h3>
          <div className="space-y-4">
            <Checkbox label="Uncontrolled Checkbox" defaultChecked />
            <Checkbox
              label="Controlled Checkbox"
              checked={ssChecked}
              onChange={setIsChecked}
            />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Checked & Disabled" disabled defaultChecked />
          </div>
        </Card>
        <Card className="mt-4">
          <h3 className="text-card-foreground mb-6 text-lg font-semibold">
            Radio Button
          </h3>
          <RadioGroup
            name="Uncontrolled"
            label="Uncontrolled Radio"
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
              { label: "Option 3", value: "3" },
              { label: "Option 4", value: "4", disabled: true },
            ]}
            defaultValue="1"
          />
          <RadioGroup
            name="Uncontrolled"
            label="Controlled Radio"
            options={[
              { label: "Option 5", value: "5" },
              { label: "Option 6", value: "6" },
              { label: "Option 7", value: "7" },
              { label: "Option 8", value: "8", disabled: true },
            ]}
            value={radioValue}
            onChange={setRadioValue}
          />
        </Card>
      </div>
    </section>
  );
}
