import { auth } from "@/auth";

export default async function Home() {
  const session = await auth;
  console.log(session);
  return (
    <div>
      <h3 className="text-white">Home</h3>
    </div>
  );
}
