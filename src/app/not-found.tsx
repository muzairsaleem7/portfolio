import { Container } from "@/components/ui/Container";
import { Compass, House } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">
        <Compass aria-hidden="true" className="size-3.5" strokeWidth={2.2} />
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="text-fg mt-4 max-w-md">
        The page you were looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">
          <House aria-hidden="true" className="size-4" />
          Back to home
        </Button>
        <Button href="/projects" variant="secondary">
          View projects
        </Button>
      </div>
    </Container>
  );
}
