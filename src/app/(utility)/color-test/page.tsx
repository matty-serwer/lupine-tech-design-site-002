import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ColorPaletteTest() {
  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Color Palette Testing Ground</h1>
        <p className="text-muted-foreground">
          Testing our custom color palette across shadcn components
        </p>
      </div>

      <Separator />

      {/* Buttons Section */}
      <section className="space-y-4">n
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </section>

      <Separator />

      {/* Cards Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Testing card backgrounds and foregrounds</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This card uses our custom background and foreground colors from the gray scale.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Example</CardTitle>
              <CardDescription>Input and label styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="test@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">Submit</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status Badges</CardTitle>
              <CardDescription>Different badge variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Alerts Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This uses the default alert styling with our custom colors.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>
              This destructive alert uses our pink color for errors and warnings.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <Separator />

      {/* Typography & Text Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Typography</h2>
        <div className="space-y-2">
          <p className="text-foreground">
            Default foreground text using gray-600 in light mode, gray-50 in dark mode.
          </p>
          <p className="text-muted-foreground">
            Muted foreground text for less emphasis (gray-400 light / gray-200 dark).
          </p>
          <p className="text-primary">
            Primary colored text using purple-400 in light mode.
          </p>
          <p className="text-secondary-foreground">
            Secondary text color using blue scale.
          </p>
          <p className="text-destructive">
            Destructive text color for errors using pink scale.
          </p>
        </div>
      </section>

      <Separator />

      {/* Background Variations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Backgrounds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Background</h3>
            <p className="text-sm text-muted-foreground">Main background color</p>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-2">Muted</h3>
            <p className="text-sm text-muted-foreground">Muted background (gray-50)</p>
          </div>

          <div className="bg-accent rounded-lg p-6">
            <h3 className="font-semibold mb-2 text-accent-foreground">Accent</h3>
            <p className="text-sm text-accent-foreground/80">Accent background (cyan-50)</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Interactive States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive States</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Hover these buttons to see state changes</Label>
            <div className="flex gap-2">
              <Button>Hover Me</Button>
              <Button variant="outline">Hover Me</Button>
              <Button variant="ghost">Hover Me</Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Focus this input to see ring color (purple-300)</Label>
            <Input placeholder="Click me to see focus ring" />
          </div>
        </div>
      </section>

      <Separator />

      {/* Border Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Borders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 rounded-lg p-4">
            <p className="text-sm">Default border using gray-100</p>
          </div>
          <div className="border-2 border-primary rounded-lg p-4">
            <p className="text-sm">Primary border using purple-400</p>
          </div>
          <div className="border-2 border-destructive rounded-lg p-4">
            <p className="text-sm">Destructive border using pink-400</p>
          </div>
          <div className="border-2 border-muted-foreground rounded-lg p-4">
            <p className="text-sm">Muted border using gray-400</p>
          </div>
        </div>
      </section>
    </div>
  );
}