import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <Input />
      <Button variant="primary" size="lg">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="primary">default</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="teritary">Teritary</Button>
    </main>
  );
}
   