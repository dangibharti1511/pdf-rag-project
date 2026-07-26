from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.rag_service import answer_question

router = APIRouter()

class QuestionRequest(BaseModel):
    question: str

class AnswerResponse(BaseModel):
    answer: str
    sources: list[int]

@router.post("/ask", response_model=AnswerResponse)
async def ask_question(request: QuestionRequest):
    try:
       result = answer_question(request.question)

       return AnswerResponse(
            answer=result["answer"],
            sources=result["sources"]
        )
    except ValueError:
     raise HTTPException(
        status_code=400,
        detail="Please upload and process a PDF before asking questions."
    )
    except Exception:
     raise HTTPException(
        status_code=500,
        detail="Something went wrong while generating the answer. Please try again."
    )