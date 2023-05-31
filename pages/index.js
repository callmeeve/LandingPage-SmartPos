import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white">
        <Hero/>
        <Feature/>
        <Testimonials/>
      </div>
    </Layout>
  )
}
