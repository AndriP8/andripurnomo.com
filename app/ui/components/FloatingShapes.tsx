'use client';

export const FloatingShapes = () => {
  return (
    <>
      <div
        className="floating-shape absolute w-[300px] h-[300px] bg-[#00ff88] top-[10%] right-[10%]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="floating-shape absolute w-[200px] h-[200px] bg-[#7b3ff2] bottom-[20%] left-[5%]"
        style={{ animationDelay: '2s' }}
      />
    </>
  );
};
