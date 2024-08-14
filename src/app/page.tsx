import Image from "next/image";
import Link from "next/link";
import managerImage from '@/assets/manager.png'
import { Calendar, CircleCheckBig, List } from "lucide-react";
export default function Home() {
  return (
    <section className="">
      <div className="mx-auto">
        <header className="flex flex-col-reverse items-center justify-center md:flex-row">
          <div className=''>
            <Image priority={true} src={managerImage} alt='Task Image' width={700} height={500} />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Work Manager</h1>
            <p className="text-xl text-gray-600 mb-6">
              Manage your work efficiently and effortlessly
            </p>
            <Link href="/add-task" > <button className="bg-gray-800 text-white py-2 px-4 rounded transition duration-300">
              Get Started
            </button> </Link>
          </div>
        </header>
        <section className="text-center mb-5">
          <h2 className="text-3xl font-semibold mb-8">Features of Task Manager</h2>
          <div className="flex justify-evenly gap-5 flex-wrap md:flex-nowrap">
            <div className="w-full p-2 py-5 md:p-5 rounded-lg bg-gray-200 ">
              <h3 className="text-2xl font-bold mb-2 flex flex-col items-center gap-4"><CircleCheckBig strokeWidth={3} /> Easy Task Management</h3>
              <p>Organize and prioritize your tasks efficiently.</p>
            </div>
            <div className="w-full p-2 py-5 md:p-5 rounded-lg bg-gray-200 ">
              <h3 className="text-2xl font-bold mb-2 flex flex-col items-center gap-4"><List strokeWidth={3} /> Task Categories</h3>
              <p>Work together with your team seamlessly.</p>
            </div>
            <div className="w-full p-2 py-5 md:p-5 rounded-lg bg-gray-200 ">
              <h3 className="text-2xl font-bold mb-2 flex flex-col items-center gap-4"><Calendar strokeWidth={3} /> Due Date Reminders</h3>
              <p>Track your time to stay on schedule.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
