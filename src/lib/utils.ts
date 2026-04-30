import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSafeImage(url?: string, type: 'dept' | 'staff' | 'video' = 'dept'): string {
  if (url && url.trim() !== '') return url;
  
  const placeholders = {
    dept: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    staff: "https://www.w3schools.com/howto/img_avatar.png",
    video: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop"
  };
  
  return placeholders[type];
}

export function getStaffAvatar(image: string | undefined, gender: "male" | "female" | string, name: string) {
  const malePlaceholder = `https://avatar.iran.liara.run/public/boy?username=${encodeURIComponent(name)}`;
  const femalePlaceholder = `https://avatar.iran.liara.run/public/girl?username=${encodeURIComponent(name)}`;
  const neutralPlaceholder = `https://avatar.iran.liara.run/public/job?username=${encodeURIComponent(name)}`;

  if (!image || image.includes("pravatar.cc") || image === "") {
    if (gender === "male") return malePlaceholder;
    if (gender === "female") return femalePlaceholder;
    return neutralPlaceholder;
  }

  // Validation: ensure image matches gender for known placeholder patterns
  if (image.includes("avatar.iran.liara.run")) {
    if (gender === "male" && image.includes("/girl")) return malePlaceholder;
    if (gender === "female" && image.includes("/boy")) return femalePlaceholder;
  }

  return image;
}
