import NavbarContent from "./NavbarContent";
import SidebarContent from "./SidebarContent";

export default function Navbars() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-foreground mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
        Navigation
      </h2>
      <NavbarContent />
      <SidebarContent />
    </section>
  );
}
