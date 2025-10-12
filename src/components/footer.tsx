import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="mt-20 font-family-outfit">
        <div className="text-center">
          <p className="text-3xl mb-2">
            Kenneth Angelo Sulaiman
          </p>
          <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={assets.mail_icon} alt="" className="w-6 mx-auto mb-2" />
            kenneth.sulaiman@gmail.com
          </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>© 2025 Kenneth Angelo Sulaiman. All rights reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li><a target="_blank" href="https://github.com/intionx">GitHub</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/kenneth-angelo-sulaiman">LinkedIn</a></li>
                <li><a target="_blank" href="https://www.instagram.com/kenneth.lai/?hl=en">Instagram</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}
