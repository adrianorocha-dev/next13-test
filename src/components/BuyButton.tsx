'use client'

import { useEffect, useState } from "react";

type Props = {
  title: string;
  url: string;
};

export function BuyButton({ title, url }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000)
  }, [])

  return (
    <a
      id="buy-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`pointer-events-none rounded-full bg-gradient-to-r from-sky-300 via-sky-400 to-sky-300 bg-size-200 bg-pos-0 px-6 py-3 text-xl font-semibold uppercase text-white ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} shadow-md transition-all duration-500 hover:bg-pos-100`}
    >
      {title}
    </a>
  );
}
