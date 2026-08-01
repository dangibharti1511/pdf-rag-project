from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import shutil

from services.pdf_service import process_pdf

router = APIRouter()

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):

        raise HTTPException(
            status_code=400,
            detail="Please upload a PDF file."
        )

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    try:

        process_pdf(file_path)

        return {

            "status": "success",

            "filename": file.filename,

            "message":
                f"PDF '{file.filename}' processed successfully"

        }

    except Exception as e:

        print(e)

        raise HTTPException(

            status_code=500,

            detail="Unable to process the PDF."

        )


@router.get("/documents")
async def get_documents():

    documents = []

    for index, filename in enumerate(

        os.listdir(UPLOAD_DIR),

        start=1

    ):

        path = os.path.join(

            UPLOAD_DIR,

            filename

        )

        if not os.path.isfile(path):

            continue

        size = os.path.getsize(path)

        documents.append({

            "id": index,

            "name": filename,

            "type": filename.split(".")[-1].upper(),

            "size": round(size / 1024 / 1024, 2),

            "favorite": False

        })

    return documents
@router.delete("/documents/{document_name}")
async def delete_document(document_name: str):

    file_path = os.path.join(
        UPLOAD_DIR,
        document_name
    )

    if not os.path.exists(file_path):

        raise HTTPException(
            status_code=404,
            detail="Document not found."
        )

    os.remove(file_path)

    return {
        "status": "success",
        "message": "Document deleted successfully."
    }
    