import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import SupabaseLogo from "../components/SupabaseLogo";
import NextJsLogo from "../components/NextJsLogo";
import LandingPage from "@/pages/LandingPage";
import BlogAdminPage from "@/pages/BlogAdminPage";
import { usePathname } from "next/navigation";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <div>
  
        {user ? (
          <BlogAdminPage/>
        ) : (
          <LandingPage/>
        )}
    


    </div>
  );
}
