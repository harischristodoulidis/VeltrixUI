import Checkboxes from "./Checkboxes";
import DropdownSelections from "./DropdownSelections";
import Radios from "./Radios";
import ToggleSwitches from "./ToggleSwitches";

export default function FormComponents() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2>Form Components</h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        <Checkboxes />
        <Radios />
        <ToggleSwitches />
      </div>
      <DropdownSelections />
    </section>
  );
}
