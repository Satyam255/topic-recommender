import { useState } from "react";
import { FormData } from "@/types";

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export default function Form({ onSubmit }: FormProps) {  // ✅ Default export
  const [formData, setFormData] = useState<FormData>({ location: "", emotion: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <label className="block mb-2">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        Emotion:
        <input
          type="text"
          name="emotion"
          value={formData.emotion}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Get Recommendations
      </button>
    </form>
  );
}
