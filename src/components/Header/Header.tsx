import React from "react";
import MidHeader from "./MidHeader";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
export default function Header() {
  return (
    <div>
      <TopHeader />
      <MidHeader />
      <BottomHeader />
    </div>
  );
}
