import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-pink-200 text-pink-900 border border-pink-400 shadow-lg rounded-md px-4 py-2",
          description: "text-pink-700",
          actionButton:
            "bg-pink-500 hover:bg-pink-600 transition text-white rounded-md px-3 py-1",
          cancelButton:
            "bg-gray-200 hover:bg-gray-300 transition text-gray-700 rounded-md px-3 py-1",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
