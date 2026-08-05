import apiClient from "./apiClient";

const chatService={

async askQuestion(question){

const response=await apiClient.post("/api/ask",{

question

});

return response;

}

};

export default chatService;