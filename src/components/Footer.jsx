import { FaGithub } from "react-icons/fa6";
import cn from "../lib/cn";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div
        className={cn(
          "max-w-[1024px] w-full p-8 flex justify-between",
          "items-center  border-t-2 border-gray-400"
        )}
      >
        <div>&copy; 2024 karpitony, YEAHx4.</div>
        <div className="text-3xl">
          <a href="https://github.com/karpitony/dodle" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
