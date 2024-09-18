import { actions } from "astro:actions";
import { navigate } from "astro:transitions/client";
import { Globe, Loader2, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type React from "react";
import { useState } from "react";
import AlertError from "./alert-error";

type Props = {
  redirectTo?: string;
};

const Login = ({ redirectTo }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const { data, error } = await actions.auth.loginAction({
      email: username,
      password,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (redirectTo) {
      return navigate(redirectTo);
    }

    const { role } = data.user;

    switch (role) {
      case "ADMIN":
        navigate("admin");
        break;
      case "USER":
        navigate("dashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex flex-col gap-4">
          <img
            src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
            alt="logo"
            className="h-8"
          />
          <Card className="mx-auto w-full max-w-md">
            <CardHeader className="items-center">
              <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
              <CardTitle className="text-xl">Log in with your email</CardTitle>
              <CardDescription>Enter your information to login</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 size-4" />
                  Sign up with Github
                </Button>
                <div className="flex items-center gap-4">
                  <span className="h-px w-full bg-input"></span>
                  <span className="text-xs text-muted-foreground">OR</span>
                  <span className="h-px w-full bg-input"></span>
                </div>

                <form
                  onSubmit={handleLogin}
                  method="POST"
                  className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm underline">
                        Forgot password
                      </a>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    Log in
                    {isLoading && <Loader2 className="ml-2 animate-spin" />}
                  </Button>

                  {error && <AlertError message={error} />}
                </form>
              </div>
            </CardContent>
          </Card>
          <div className="mx-auto flex gap-1 text-sm">
            <p>Don&apos;t have an account yet?</p>
            <a href="/register" className="underline">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
