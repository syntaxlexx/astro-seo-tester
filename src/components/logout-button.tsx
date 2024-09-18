import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Props {
  redirectTo?: string;
}

const LogoutButton = ({ redirectTo }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    const { error } = await actions.auth.logout();

    setIsLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast("Logged Out Successfully");

    if (redirectTo) {
      return navigate(redirectTo);
    }

    navigate("/");
  };

  return (
    <Button variant={"outline"} onClick={handleLogout} disabled={isLoading}>
      Logout
      {isLoading && <Loader2 className="ml-2 animate-spin" />}
    </Button>
  );
};

export default LogoutButton;
