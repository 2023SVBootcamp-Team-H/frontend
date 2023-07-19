import React, { useRef, useEffect } from 'react';
import { PageFlip } from 'page-flip';

function Test() {
  const myRef = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  // const ref6 = useRef(null);

  useEffect(() => {
    // const pageFlip = new PageFlip(myRef.current!, {
    //   width: 400, // required parameter - base page width
    //   height: 600, // required parameter - base page height
    // });
    const pageFlip = new PageFlip(document.getElementById('book')!, {
      width: 400, // required parameter - base page width
      height: 600, // required parameter - base page height
    });
    // const h = [
    //   ref0.current!,
    //   ref1.current!,
    //   ref2.current!,
    //   ref3.current!,
    //   ref4.current!,
    //   ref5.current!,
    //   ref6.current!,
    // ];
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
  }, []);
  return (
    <div id="book" ref={myRef} className="bg-emerald-900">
      <div
        className="my-page border border-solid border-red-600 bg-slate-400"
        ref={ref0}
        data-density="hard"
      >
        Page Cover
      </div>
      <div className="my-page border border-solid border-amber-400" ref={ref1}>
        Page one
      </div>
      <div
        className="my-page my-page border border-solid border-teal-950"
        ref={ref2}
      >
        Page two
      </div>
      <div className="my-page" ref={ref3}>
        Page three
      </div>
      <div className="my-page" ref={ref4}>
        Page four
      </div>
      <div className="my-page" ref={ref5} data-density="hard">
        Last page
      </div>
    </div>
  );
}

export default Test;
