import { FileText, Pin } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Location() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
            <Pin size={18} />
            <p>Location</p>
          </div>
        </div>
        <CardDescription className="text-primary">
          Brno, Czech Republic
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
