import { useState } from "react";
import Card from "../ui/Card";
import Select from "../ui/Select";

export default function DropdownSelections() {
  const [selectDropdownValue, setSelectDropdownValue] = useState("4");

  return (
    <Card className="mt-4 sm:mt-6">
      <h3 className="text-card-foreground mb-4 text-lg font-semibold">
        Select Dropdown
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <Select
          defaultValue="1"
          label="Uncontrolled"
          options={[
            {
              label: "Option 1 ",
              value: "1",
            },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
          ]}
        />
        <Select
          label="Controlled"
          options={[
            { label: "Option 4", value: "4" },
            { label: "Option 5", value: "5" },
            { label: "Option 6", value: "6" },
          ]}
          value={selectDropdownValue}
          onChange={setSelectDropdownValue}
        />
        <Select
          label="Not Selected"
          placeholder="Select..."
          options={[
            { label: "Option 7", value: "7" },
            { label: "Option 8", value: "8" },
            { label: "Option 9", value: "9" },
          ]}
        />
        <Select
          label="With Error"
          placeholder="Select option"
          error="Please select an option"
          options={[
            { label: "Option 10", value: "10" },
            { label: "Option 11", value: "11" },
          ]}
        />
      </div>
    </Card>
  );
}
