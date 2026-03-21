import { useState } from "react";
import Card from "../ui/Card";
import RadioGroup from "../ui/RadioGoup";

export default function Radio() {
  const [radioValue, setRadioValue] = useState("5");

  return (
    <Card className="mt-4">
      <h3 className="text-card-foreground mb-4 text-lg font-semibold">
        Radio Button
      </h3>
      <Card>
        <RadioGroup
          name="Uncontrolled"
          label="Uncontrolled"
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
            { label: "Option 4", value: "4", disabled: true },
          ]}
          defaultValue="1"
        />
      </Card>
      <Card className="mt-4">
        <RadioGroup
          name="Controlled"
          label="Controlled"
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
    </Card>
  );
}
