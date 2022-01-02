import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=> setState(state + 1)}>+</button>
      <ul>
        <li>
          <Link href="/about/:id">about</Link>
        </li>
        <li>
          <Link href="/news">news</Link>
        </li>
      </ul>
    </div>
  );
}
