from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import shutil
from services.pdf_service import process_pdf

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload")
@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    # Check file extension
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Please upload a PDF file."
        )

    # Save uploaded file
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        process_pdf(file_path)

        return {
            "message": f"PDF '{file.filename}' processed successfully"
        }

    except Exception as e:
      print(f"Upload Error: {e}")

      raise HTTPException(
        status_code=500,
        detail="Unable to process the PDF. Please try another PDF."
    )