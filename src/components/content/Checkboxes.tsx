import { useState } from "react";
import Card from "../ui/Card";
import Checkbox from "../ui/Checkbox";

export default function Checkboxes() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card className="mt-4">
      <h3 className="text-card-foreground mb-6 text-lg font-semibold">
        Checkbox
      </h3>
      <div className="space-y-4">
        <Checkbox label="Uncontrolled" defaultChecked />
        <Checkbox
          label="Controlled"
          checked={isChecked}
          onChange={setIsChecked}
        />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Disabled" disabled defaultChecked />
      </div>
    </Card>
  );
}
