import React, { useState, useEffect, useContext } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useGetBanner } from "@/hooks/useGetBanner";
import { BannerContext } from "@/store/Banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [bannerData, setBannerData] = useState({
    isVisible: true,
    description: "",
    bannerLink: "",
    timerDuration: 0,
    remainingTime: 0,
    title: "",
  });
  const { loading, data, getBanner } = useGetBanner();
  const { banner, setBanner } = useContext(BannerContext);

  function timeToSeconds(timeString) {
    if (!timeString) return 0;
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      throw new Error("Invalid time format");
    }
    return hours * 3600 + minutes * 60 + seconds;
  }

  useEffect(() => {
    async function fetchData() {
      await getBanner();
    }
    if (!banner.description) {
      fetchData();
    }
  }, [banner.description, getBanner]);

  useEffect(() => {
    if (banner) {
      const initialTime = timeToSeconds(banner.timeDuration);
      setBannerData({
        isVisible: banner.isVisible,
        description: banner.description,
        bannerLink: banner.bannerLink,
        timerDuration: initialTime,
        remainingTime: initialTime,
        title: banner.title,
      });
    }
  }, [banner]);

  useEffect(() => {
    if (bannerData.remainingTime > 0) {
      const intervalId = setInterval(() => {
        setBannerData((prevData) => {
          const newRemainingTime = prevData.remainingTime - 1;
          return {
            ...prevData,
            remainingTime: newRemainingTime,
          };
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [bannerData.remainingTime]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}h ${mins.toString().padStart(2, "0")}m ${secs.toString().padStart(2, "0")}s`;
  };

  const courseCards = [
    {
      title: "DSA Mastery",
      description: "Master Data Structures and Algorithms",
      price: "$99",
    },
    {
      title: "CS Fundamentals",
      description: "Core Computer Science Concepts",
      price: "$89",
    },
    {
      title: "System Design",
      description: "Learn to Design Scalable Systems",
      price: "$129",
    },
    {
      title: "Competitive Coding",
      description: "Sharpen Your Problem-Solving Skills",
      price: "$79",
    },
    {
      title: "Interview Prep",
      description: "Ace Your Technical Interviews",
      price: "$109",
    },
    {
      title: "Full Stack Development",
      description: "Build Modern Web Applications",
      price: "$149",
    },
    {
      title: "Machine Learning Basics",
      description: "Introduction to AI and ML",
      price: "$119",
    },
    {
      title: "Cloud Computing",
      description: "AWS, Azure, and GCP Fundamentals",
      price: "$139",
    },
    {
      title: "Data Science",
      description: "Python for Data Science",
      price: "$119",
    },
    {
      title: "Artificial Intelligence",
      description: "AI Algorithms and Machine Learning",
      price: "$119",
    },
    {
      title: "Cyber Security",
      description: "Protect Your Digital Assets",
      price: "$119",
    },
    {
      title: "Android Development",
      description: "Build Native Android Applications",
      price: "$119",
    },
  ];
  console.log("URL IS " + banner.bannerLink);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TUF</h1>
          <Button variant="outline" className="text-white border-white">
            <Link to="/adminlogin">Go To Dashboard</Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-lg mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Gear Up for <span className="text-white">Success</span>: Your
            Ultimate Preparation Hub!
          </h1>
          <p className="text-xl mb-4">
            Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
            Design Systems, Hone Competitive Skills, and Ace Interviews
            Effortlessly
          </p>
          {bannerData.isVisible && bannerData.remainingTime > 0 && (
            <div className="bg-black bg-opacity-50 p-4 rounded">
              <h2 className="text-2xl font-bold mb-2">{bannerData.title}</h2>
              <p className="mb-2">{bannerData.description}</p>
              <p className="text-lg font-bold">
                Time remaining: {formatTime(bannerData.remainingTime)}
              </p>
              <Link to={banner.bannerLink}>
                <Button
                  variant="default"
                  className="mt-4 bg-white text-red-600 hover:bg-gray-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseCards.map((card, index) => (
            <Card key={index} className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {card.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">{card.price}</span>
                <Button
                  variant="default"
                  className="bg-red-500 hover:bg-red-600"
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
