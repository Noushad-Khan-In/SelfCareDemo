import React from "react";
import PackageList from "./PackageList";

const Package = () => {
  const packages = [
    {
      id: 1,
      title: "Grooming Essential",
      rating: "★ 4.3| 2.3K",
      services: [
        "Haircut: Clean and neat haircut",
        "Beard/Shaving Grooming: Clean and neat haircut",
        "Massage: Relaxing 10-minute head massage",
      ],
      price: "₹1190",
      duration: "40 mins",
    },
    {
      id: 2,
      title: "Grooming Essential",
      rating: "★ 4.3|2.3K",
      services: [
        "Haircut: Clean and neat haircut",
        "Beard/Shaving Grooming: Clean and neat haircut",
        "Massage: Relaxing 10-minute head massage",
      ],
      price: "₹1190",
      duration: "40 mins",
    },
  ];

  return <PackageList packages={packages} title="Packages for you" />;
};

export default Package;
