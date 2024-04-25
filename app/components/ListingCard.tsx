import React from "react";
interface Listing {
  description: string;
  imagePath: string;
  location: string;
  price: number;
}
export default function ListingCard({
  description,
  imagePath,
  location,
  price,
}: Listing) {
  return <div>ListingCard</div>;
}
