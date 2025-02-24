"use client";
import { useState } from "react";
import Recommendations from "@/components/Recommendations";
import { FormData, ApiResponse } from "@/types";
import  Form  from "@/components/Form";

export default function Home() {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleSubmit = async (formData: FormData) => {
    const response = await fetch("/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data: ApiResponse = await response.json();
    setRecommendations(data.topics);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Topic Recommender</h1>
      <Form onSubmit={handleSubmit} />
      <Recommendations topics={recommendations} />
    </div>
  );
}
