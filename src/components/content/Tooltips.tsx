import Button from "../ui/Button";
import Card from "../ui/Card";
import Tooltip from "../ui/Tooltip";

export default function Tooltips() {
  return (
    <div>
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Tooltips
      </h3>
      <Card>
        <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
          <Tooltip content="Tooltip on top">
            <Button variant="outline">Hover Me (Top)</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" position="bottom">
            <Button variant="outline">Hover Me (Bottom)</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" position="left">
            <Button variant="outline" className="hidden sm:inline-flex">
              Hover Me (Left)
            </Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" position="right">
            <Button variant="outline" className="hidden sm:inline-flex">
              Hover Me (Right)
            </Button>
          </Tooltip>
        </div>
      </Card>
    </div>
  );
}
