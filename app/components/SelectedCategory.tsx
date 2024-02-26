"use client";
import React, { useState } from "react";
import { categoryItems } from "../lib/CatergoryItem";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

function SelectedCategory() {
  const [SelectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto mb-36">
      {categoryItems.map((item) => (
        <div className="cursor-pointer">
          <Card>
            <CardHeader
              className={
                SelectedCategory === item.name
                  ? "border-primary border-2 rounded transition-colors duration-200"
                  : ""
              }
              onClick={() => setSelectedCategory(item.name)}
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="w-8 h-8"
              />
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SelectedCategory;
