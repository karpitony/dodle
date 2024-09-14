import cn from "../lib/cn";

export default function Content({ children, isMain }) {
  return (
    <div className={cn("flex justify-center", isMain && "min-h-[75vh] md:min-h-[100vh]")}>
      <div className="max-w-[1024px] w-full">{children}</div>
    </div>
  );
}
