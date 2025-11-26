import { Routes, Route } from "react-router-dom";
import RestaurantRegester1 from "./RestaurantRegester1";
import RestaurantRegester2 from "./RestaurantRegester2";
import RestaurantRegester3 from "./RestaurantRegester3";
import RestaurantRegesterFinalStep from "./RestaurantRegesterFinalStep";

export default function RestaurantRegester() {
  return (
    <Routes>

      {/* الخطوة الأولى */}
      <Route path="step1" element={<RestaurantRegester1 />} />

      {/* الخطوة الثانية */}
      <Route path="step2" element={<RestaurantRegester2 />} />

      {/* الخطوة الثالثة */}
      <Route path="step3" element={<RestaurantRegester3 />} />

      {/* الخطوة النهائية */}
      <Route path="final" element={<RestaurantRegesterFinalStep />} />

    </Routes>
  );
}
