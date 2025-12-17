import { useState } from "react";

export default function Calculator() {
  const [feet, setFeet] = useState(0);
  const [height, setHeight] = useState(6);

  const sqft = feet * height;
  const total = Math.round(sqft * 2.5);

  return (
    <main style={{ fontFamily: "system-ui", padding: 30 }}>
      <h1>Paint Quote Calculator</h1>

      <label>
        Linear Feet:
        <input type="number" onChange={e => setFeet(e.target.value)} />
      </label>
      <br /><br />

      <label>
        Height (ft):
        <input type="number" onChange={e => setHeight(e.target.value)} />
      </label>

      <h2>Total Estimate: ${total}</h2>

      <a href="/">
        ← Back
      </a>
    </main>
  );
}
