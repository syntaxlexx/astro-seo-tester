import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image } from "astro:assets";

const loremImage = "https://picsum.photos/200/300?random=";

const Hero = () => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            A Collection of Components Built With Shadcn & Tailwind
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Finely crafted components built with React, Tailwind and Shadcn UI.
            Developers can copy and paste these blocks directly into their
            project.
          </p>
        </div>
        <Button size="lg" className="mt-10">
          Discover all components
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <div className="mx-4 inline-flex items-center -space-x-4">
            <img
              className="size-14 border rounded-full"
              src={loremImage + "1"}
              alt="placeholder"
            />
            <img
              className="size-14 border rounded-full"
              src={loremImage + "2"}
              alt="placeholder"
            />
            <img
              className="size-14 border rounded-full"
              src={loremImage + "3"}
              alt="placeholder"
            />
            <img
              className="size-14 border rounded-full"
              src={loremImage + "4"}
              alt="placeholder"
            />
            <img
              className="size-14 border rounded-full"
              src={loremImage + "5"}
              alt="placeholder"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from 200+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
