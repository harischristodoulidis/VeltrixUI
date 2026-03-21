import { useState } from "react";
import Card from "../ui/Card";
import Toggle from "../ui/Toggle";

export default function ToggleSwitches() {
  const [toggleChecked, setToggleChecked] = useState(false);

  return (
    <Card className="mt-4">
      <h3 className="text-card-foreground mb-4 text-lg font-semibold">
        Toggle Switch
      </h3>
      <div className="space-y-4">
        <Toggle label="Uncontrolled" defaultChecked />
        <Toggle
          label="Controlled"
          checked={toggleChecked}
          onChange={setToggleChecked}
        />
        <Toggle label="Disabled" disabled defaultChecked />
      </div>
    </Card>
  );
}
