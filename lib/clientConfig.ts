// nextjs-frontend/lib/clientConfig.ts

import { client } from "@/app/openapi-client/sdk.gen";

export const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
  }

  return process.env.API_BASE_URL || "http://localhost:8000";
};

const configureClient = () => {
  const baseURL = process.env.API_BASE_URL || "http://localhost:8000";

  client.setConfig({
    baseURL: baseURL,
  });
};
configureClient();