import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function Badges() {
  return (
    <div className="mb-6">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Badges
      </h3>
      <Card>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge size="sm">Small</Badge>
        </div>
      </Card>
    </div>
  );
}
