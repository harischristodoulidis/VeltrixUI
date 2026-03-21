import Alert from "../ui/Alert";
import Badge from "../ui/Badge";
import Alerts from "./Alerts";
import Badges from "./Badges";
import Tooltips from "./Tooltips";

export default function FeedbackComponents() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-foreground mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
        Feedback Components
      </h2>
      <Alerts />
      <Badges />
      <Tooltips />
    </section>
  );
}
