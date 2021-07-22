// const GERMAN_DIGITS = [
//   "Null",
//   "Ein",
//   "Zwei",
//   "Drei",
//   "Vier",
//   "Fünf",
//   "Sechs",
//   "Sieben",
//   "Acht",
//   "Neun",
// ];

// ReactDOM.render(
//   <InfiniteScrollLoop>
//     {Array.from(GERMAN_DIGITS.entries()).map(([index, digit]) => (
//       <div>
//         {index}.{" "}
//         <span
//           style={{
//             color: `hsl(${(index / GERMAN_DIGITS.length) * 360}deg 100% 50%)`,
//           }}
//         >
//           {digit}.
//         </span>
//       </div>
//     ))}
//   </InfiniteScrollLoop>,
//   document.querySelector("main")
// );

// function InfiniteScrollLoop({
//   surroundingBackup = 2,
//   outerStyle,
//   innerStyle,
//   children,
// }: {
//   surroundingBackup: number;
//   scrollPaddingPercentage: number;
//   outerStyle: React.CSSProperties;
//   innerStyle: React.CSSProperties;
//   children: React.Node;
// }): JSX.Element {
//   const contentRef = React.useRef<HTMLDivElement | null>(null);
//   const scrollRef = React.useRef<HTMLDivElement | null>(null);
//   const [height, setHeight] = React.useState<number>(0);

//   const backupHeight = height * surroundingBackup;

//   const handleScroll = React.useCallback(() => {
//     if (scrollRef.current) {
//       const scroll = scrollRef.current.scrollTop;
//       if (scroll < backupHeight || scroll >= backupHeight + height) {
//         scrollRef.current.scrollTop = backupHeight + (scroll % height);
//       }
//     }
//   }, [height]);

//   React.useLayoutEffect(() => {
//     if (contentRef.current) {
//       setHeight(contentRef.current.offsetHeight);
//       scrollRef.current.scrollTop = backupHeight;
//     }
//   });

//   return (
//     <div className="infinite-scroll-loop-outer" style={outerStyle}>
//       <div
//         className="infinite-scroll-loop-inner"
//         ref={scrollRef}
//         style={{
//           height,
//           ...innerStyle,
//         }}
//         onScroll={handleScroll}
//       >
//         {Array(surroundingBackup)
//           .fill()
//           .map(() => (
//             <div>{children}</div>
//           ))}
//         <div ref={contentRef}>{children}</div>
//         {Array(surroundingBackup)
//           .fill()
//           .map(() => (
//             <div>{children}</div>
//           ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

const hh = () => {
  return <div></div>;
};

export default hh;
