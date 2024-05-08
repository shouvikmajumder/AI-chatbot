import OpenAI from 'openai';
import dotenv from "dotenv"; 

dotenv.config();
const configuration = new OpenAI({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });

const openai = new OpenAI(configuration); //This is our open Ai object

async function main(){
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hello!"}],
      });
console.log(chatCompletion);
}

main();
