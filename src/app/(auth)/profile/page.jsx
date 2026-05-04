"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import UpdateInfo from "@/app/Components/UpdateInfo";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending]);

  if (isPending) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8">

        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-bold text-amber-600 mb-3">
            {session?.user?.image ? (
              <img src={session.user.image} className="w-20 h-20 rounded-full object-cover" alt="avatar" />
            ) : (
              session?.user?.name?.charAt(0).toUpperCase()
            )}
          </div>
          <h1 className="text-xl font-bold text-gray-800">{session?.user?.name}</h1>
          <p className="text-sm text-gray-500">{session?.user?.email}</p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-1">Full Name</p>
            <p className="text-sm font-medium text-gray-700">{session?.user?.name}</p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-1">Email</p>
            <p className="text-sm font-medium text-gray-700">{session?.user?.email}</p>
          </div>

            <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-1">Profile Image</p>
            <p className="text-sm font-medium  break-all text-gray-700">{session?.user?.image || "No image provided"}</p>
          </div>
          <div className="bg-gray-50 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-400 mb-1">Account Created</p>
            <p className="text-sm font-medium text-gray-700">
              {new Date(session?.user?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        
        <UpdateInfo />

      </div>
    </div>
  );
};

export default ProfilePage;