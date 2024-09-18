import { TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface Props {
  title?: string;
  message: string;
}

const AlertError = ({ title, message }: Props) => {
  const formatted = message.split(/\r?\n/);

  return (
    <Alert variant={"destructive"}>
      <TriangleAlert className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>
        {formatted.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </AlertDescription>
    </Alert>
  );
};

export default AlertError;
