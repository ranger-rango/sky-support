import { createFileRoute } from "@tanstack/react-router";
import IndexPage from "../../pages";

export const Route = createFileRoute("/_protected/")({
  component: Index,
});

function Index() {
  return (
    // <div className="p-2">
    //   <h3>Welcome Home!</h3>
    // </div>
    <IndexPage />
  )
}
