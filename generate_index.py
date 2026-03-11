import os
import json

base_folder = "documents"

documents = []

for root, dirs, files in os.walk(base_folder):

    for file in files:

        if file.lower().endswith((".pdf",".docx",".doc")):

            title = os.path.splitext(file)[0]

            title_clean = title.replace("_"," ").replace("-"," ")

            pdf_path = ""
            word_path = ""

            if file.lower().endswith(".pdf"):
                pdf_path = os.path.join(root,file).replace("\\","/")

            if file.lower().endswith((".docx",".doc")):
                word_path = os.path.join(root,file).replace("\\","/")

            entry = {

                "title": title_clean,
                "description": title_clean,
                "pdf": pdf_path,
                "word": word_path,
                "category": "document",
                "text": title_clean.lower(),
                "tags": title_clean.lower().split()

            }

            documents.append(entry)

index = {"documents":documents}

print(json.dumps(index,indent=2))