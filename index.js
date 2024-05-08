import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an instance of OpenAI using your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const configuration = new OpenAI(openai); //This is our open Ai object

async function main(){
    const chatCompletion = await configuration.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hello!"}],
      });
console.log(chatCompletion);
}

main();
