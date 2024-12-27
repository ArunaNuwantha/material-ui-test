import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: Request) {
    const data = { message: "hello, welcome to next.js api" };
    return Response.json(data);
}