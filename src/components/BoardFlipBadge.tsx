import React, { useEffect, useState } from "react";

const BoardFlipBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 1500); // smoother timing

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="eduFlip-container">
        <div
          className={`eduFlip-card ${
            isFlipped ? "eduFlip-rotate" : ""
          }`}
        >
          <div className="eduFlip-front">CBSE Board</div>
          <div className="eduFlip-back">State Boards</div>
        </div>
      </div>

      <style>
        {`
        .eduFlip-container {
          width: 210px;
          height: 55px;
          perspective: 1200px;
          animation: eduFloat 3s ease-in-out infinite;
        }

        .eduFlip-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
          cursor: pointer;
        }

        .eduFlip-card:hover {
          transform: scale(1.05);
        }

        .eduFlip-rotate {
          transform: rotateY(180deg);
        }

        .eduFlip-front,
        .eduFlip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.8px;
          color: #fff;
          backface-visibility: hidden;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: all 0.6s ease;
        }

        /* Animated Gradient Background */
        .eduFlip-front {
          background: linear-gradient(-45deg, #0047AB, #007BFF, #00C6FF, #0047AB);
          background-size: 400% 400%;
          animation: gradientMove 6s ease infinite;
        }

        .eduFlip-back {
          background: linear-gradient(-45deg, #ff512f, #dd2476, #ff9966, #ff512f);
          background-size: 400% 400%;
          animation: gradientMove 6s ease infinite;
          transform: rotateY(180deg);
        }

        /* Shine Sweep Effect */
        .eduFlip-front::before,
        .eduFlip-back::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: rgba(255,255,255,0.3);
          transform: skewX(-25deg);
          animation: shine 3s infinite;
        }

        /* Floating Animation */
        @keyframes eduFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        /* Gradient Movement */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Shine Animation */
        @keyframes shine {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        `}
      </style>
    </>
  );
};

export default BoardFlipBadge;