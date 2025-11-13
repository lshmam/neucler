import { useState, useEffect } from "react";

export default function RevenueLossSection2() {
  const [counter, setCounter] = useState(400);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Add the 'number' type to the value parameter
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="flex flex-col items-center px-4 py-12 md:py-20 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-8 max-w-[90%] md:max-w-[884px]">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-black text-center">
          Revenue Loss/Second
        </h2>
        <p className="text-8xl md:text-9xl text-black text-center">
          {formatCurrency(counter)}+
        </p>
        <p className="text-xl md:text-3xl text-gray-400 text-center max-w-[90%] md:max-w-[630px]">
          Businesses lose out on potential revenue by not installing the proper
          systems.
        </p>
      </div>
    </section>
  );
}
