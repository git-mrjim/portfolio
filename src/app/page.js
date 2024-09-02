import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
        <div className='relative'>
          <div className='fixed top-0 left-0 right-0'>
            <Navbar></Navbar>
          </div>
          <div className='relative top-28 mx-10'>
            <Intro></Intro>
          </div>
          <div className='mt-40 bg-[#1e293b] py-96'></div>
        </div>
    </>
  );
}
