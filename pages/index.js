import Heros from "../components/Heros/Heros";
import Section2 from "../components/Chains/Section2";
export default function Home() {
  const styles = {
    position: "relative",
  };
  return (
    <main style={styles}>
      <Heros />
      <Section2 />
    </main>
  );
}
