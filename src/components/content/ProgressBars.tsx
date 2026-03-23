import Card from "../ui/Card";
import { Progress } from "../ui/Progress";

export default function ProgressBars() {
  return (
    <div className="mb-6">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Progress Bar
      </h3>
      <Card>
        <div className="space-y-4">
          <div>
            <div className="text-muted-foreground mb-2 text-sm">Default</div>
            <Progress value={45} />
          </div>
          <div>
            <div className="text-muted-foreground mb-2 text-sm">Small</div>
            <Progress value={30} size="sm" showLabel />
          </div>
          <div>
            <div className="text-muted-foreground mb-2 text-sm">Large</div>
            <Progress value={60} size="lg" />
          </div>
          <div>
            <div className="text-muted-foreground mb-2 text-sm">Success</div>
            <Progress value={100} variant="success" />
          </div>
          <div>
            <div className="text-muted-foreground mb-2 text-sm">Warning</div>
            <Progress value={70} variant="warning" showLabel />
          </div>
          <div>
            <div className="text-muted-foreground mb-2 text-sm">Error</div>
            <Progress value={25} variant="error" />
          </div>
        </div>
      </Card>
    </div>
  );
}
