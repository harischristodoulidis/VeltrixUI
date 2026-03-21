import Card from "../ui/Card";
import Breadcrump from "../ui/Breadcrumb";

export default function BreadcrumbContent() {
  return (
    <section className="mb-12 sm:mb-16">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Breadcrumb
      </h3>
      <Card>
        <Breadcrump
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "#products" },
            { label: "Analytics", href: "#analytics" },
            { label: "Reports" },
          ]}
        ></Breadcrump>
      </Card>
    </section>
  );
}
