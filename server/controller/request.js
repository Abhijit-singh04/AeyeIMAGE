const router = require("express").Router()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const fetch = async (req, res) => {
  console.log(req.body, 'hello');

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
  
  const query_at_back = req.body.query ;
  console.log('query_at_back->',query_at_back)
  
  try {
   
    const completion = await openai.createImage({
      prompt: `${query_at_back}`,
      n: 10,
      size: "1024x1024",
    });
    res.status(200).json({ result: image_url = completion.data.data  });

  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}








module.exports = { fetch }