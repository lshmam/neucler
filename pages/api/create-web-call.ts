// pages/api/create-web-call.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Retell from "retell-sdk";

// Define the expected shape of the response data
type ResponseData = {
  call_id?: string;
  access_token?: string;
  message?: string; // Used for sending error messages
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Ensure the API key is configured
  if (!process.env.RETELL_API_KEY) {
    return res
      .status(500)
      .json({ message: "Retell API key is not configured" });
  }

  // Initialize Retell client after verifying API key exists
  const retell = new Retell({
    apiKey: process.env.RETELL_API_KEY,
  });

  try {
    // We expect the agentId to be in the request body
    const { agentId } = req.body;

    if (!agentId) {
      return res.status(400).json({ message: "agentId is a required field" });
    }

    // Validate that agentId is not a placeholder
    if (agentId === "YOUR_AGENT_ID_HERE" || agentId.trim() === "") {
      return res.status(400).json({
        message:
          "Please configure a valid Retell Agent ID. The current value is a placeholder.",
      });
    }

    const webCallResponse = await retell.call.createWebCall({
      agent_id: agentId,
      // Optional: Add dynamic variables if your agent uses them
      // retell_llm_dynamic_variables: { user_name: "John Doe" },
    });

    // Send the necessary information back to the frontend
    res.status(200).json({
      call_id: webCallResponse.call_id,
      access_token: webCallResponse.access_token,
    });
  } catch (error) {
    console.error("Error creating web call:", error);
    // Provide more detailed error information
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorDetails = error instanceof Error ? error.stack : String(error);
    console.error("Error details:", errorDetails);

    res.status(500).json({
      message: `Failed to create web call: ${errorMessage}`,
    });
  }
}
