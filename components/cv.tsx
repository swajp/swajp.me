import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function CV() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
            <FileText size={18} />
            <p>CV</p>
          </div>
        </div>
        <CardTitle>View my CV</CardTitle>
      </CardHeader>
    </Card>
  );
}
