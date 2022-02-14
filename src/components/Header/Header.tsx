import React from "react";
import BottomHeader from "./BottomHeader";
import MidHeader from "./MidHeader";
import TopHeader from "./TopHeader";

export default function Header() {
  return (
    <div>
      <TopHeader />
      <MidHeader />
      <BottomHeader />
    </div>
  );
}
