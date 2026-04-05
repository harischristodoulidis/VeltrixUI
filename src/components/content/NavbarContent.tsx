import Button from "../ui/Button";
import Navbar from "../ui/Navbar";

const items = [
  {
    id: "1",
    label: "Home",
    href: "#home",
    active: true,
  },
  {
    id: "2",
    label: "Products",
    children: [
      { id: "p1", label: "All Products", href: "#all-products" },
      { id: "p2", label: "New Arrivals", href: "#new-arrivals" },
      { id: "p3", label: "Best Sellers", href: "#best-sellers" },
    ],
  },
  {
    id: "3",
    label: "Services",
    children: [
      { id: "s1", label: "Consulting", href: "#consulting" },
      { id: "s2", label: "Development", href: "#development" },
      { id: "s3", label: "Support", href: "#support" },
    ],
  },
  {
    id: "4",
    label: "About",
    href: "#about",
  },
  {
    id: "5",
    label: "Contact",
    href: "#contact",
  },
];

export default function NavbarContent() {
  return (
    <div className="mb-6">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Navbar
      </h3>
      <div className="border-border rounded-lg border">
        <Navbar
          brand="Brand"
          items={items}
          actions={
            <>
              <Button variant="outline">Sign In</Button>
              <Button variant="primary">Sign Up</Button>
            </>
          }
          mobileActions={
            <>
              <Button variant="secondary">Sign In</Button>
              <Button variant="primary">Sign Up</Button>
            </>
          }
        />
      </div>
    </div>
  );
}
