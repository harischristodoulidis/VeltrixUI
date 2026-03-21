import Card from "../ui/Card";
import Tabs from "../ui/Tabs";

export default function TabMenu() {
  return (
    <section className="mb-12 sm:mb-16">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Tabs
      </h3>
      <Card>
        <Tabs
          defaultValue="overview"
          tabs={[
            {
              label: "Overview",
              value: "overview",
              content: <div className="py-4">Overview content goes here</div>,
            },
            {
              label: "Analytics",
              value: "analytics",
              content: <div className="py-4">Analytics content goes here</div>,
            },
            {
              label: "Reports",
              value: "reports",
              content: <div className="py-4">Reports content goes here</div>,
            },
            {
              label: "Disabled",
              value: "disabled",
              content: <div>Disabled</div>,
              disabled: true,
            },
          ]}
        ></Tabs>
      </Card>
    </section>
  );
}
