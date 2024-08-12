import React, { useState, useEffect, useContext } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useUpdateBanner } from "@/hooks/useUpdateBanner";
import { BannerContext } from "@/store/Banner";
import { useGetBanner } from "@/hooks/useGetBanner";
import { AlertCircle, Clock, Link as LinkIcon, Type } from "lucide-react";

const Dashboard = () => {
  const [bannerData, setBannerData] = useState({
    isVisible: false,
    description: "",
    timeDuration: "",
    bannerLink: "",
    title: "",
  });
  const { banner, setBanner } = useContext(BannerContext);
  const { getBanner } = useGetBanner();

  useEffect(() => {
    async function fetchData() {
      await getBanner();
    }
    if (!banner.description) {
      fetchData();
    }
    setBannerData(banner);
  }, [banner, setBanner]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBannerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleVisibilityChange = () => {
    setBannerData((prevData) => ({
      ...prevData,
      isVisible: !prevData.isVisible,
    }));
  };

  const { loading, updateBanner } = useUpdateBanner();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBanner({
      isVisible: bannerData.isVisible,
      description: bannerData.description,
      timeDuration: bannerData.timeDuration,
      bannerLink: bannerData.bannerLink,
      title: bannerData.title,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 p-4">
      <Card className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md shadow-xl dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Banner Dashboard
          </CardTitle>
          <p className="text-center text-gray-300">
            Manage your banner settings
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between space-x-2 bg-gray-700/50 p-3 rounded-lg">
              <Label htmlFor="banner-visible" className="text-white">
                Banner Visible
              </Label>
              <Switch
                id="banner-visible"
                className="border-gray-300 bg-gray-100"
                checked={bannerData.isVisible}
                onCheckedChange={handleVisibilityChange}
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-200"
              >
                Description
              </Label>
              <div className="relative">
                <AlertCircle
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  name="description"
                  value={bannerData.description}
                  onChange={handleInputChange}
                  placeholder="Banner Description"
                  className="pl-10 rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="timeDuration"
                className="text-sm font-medium text-gray-200"
              >
                Timer
              </Label>
              <div className="relative">
                <Clock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  name="timeDuration"
                  value={bannerData.timeDuration}
                  onChange={handleInputChange}
                  placeholder="hh:mm:ss"
                  className="pl-10 rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="bannerLink"
                className="text-sm font-medium text-gray-200"
              >
                Link
              </Label>
              <div className="relative">
                <LinkIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  name="bannerLink"
                  value={bannerData.bannerLink}
                  onChange={handleInputChange}
                  placeholder="Banner Link"
                  className="pl-10 rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-200"
              >
                Link Title
              </Label>
              <div className="relative">
                <Type
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  name="title"
                  value={bannerData.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                  className="pl-10 rounded-md bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              type="submit"
            >
              {loading ? "Updating..." : "Update Banner"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
