import { cn } from "cn"
import React from "react"
import Container from "./Container"
import Image from "next/image"
import { Button } from "../ui/button"
import { User } from "lucide-react"
import type { Component } from '@/app/models/types'


export default function Header({ className }: Component) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="">
          <Image
            unoptimized={true}
            src="/logo.png"
            alt="logo"
            width={155}
            height={24}
          />
          <div className="">
            <h1 className="uppeacase hidden text-2xl font-black">Pizza Bash</h1>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant={"default"} size={'lg'}>
            <User />
            Войти
          </Button>
        </div>
      </Container>
    </header>
  )
}