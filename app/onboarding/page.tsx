'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/shadcn/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card"
import { Input } from "@/components/ui/shadcn/input"
import { Label } from "@/components/ui/shadcn/label"
import { Progress } from "@/components/ui/shadcn/progress"

export default function TabsDemo() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
        <Card className="w-[30%]">
            <CardHeader>
                <CardTitle>Step 4 of 4</CardTitle>
                <Progress value={75} />
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="idealJob">Ideal Job</Label>
                <Input id="idealJob" defaultValue="" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="idealCity">Ideal City</Label>
                <Input id="idealCity" defaultValue="" />
                </div>
            </CardContent>
        </Card>
    </div>
  )
}